import React, { useState, useRef, forwardRef } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Modal,
  Platform,
  SafeAreaView,
  StatusBar,
  TextInput,
  View,
} from 'react-native';
import AsyncPickerResult from './components/AsyncPickerResult';
import DefaultButton from './components/DefaultButton';
import Header from './components/Header';
import LinkButton from './components/LinkButton';
import PickerItem from './components/PickerItem';
import type { AsyncPickerProps, AsyncPickerRef } from './types';
import { useAsyncPicker } from './utils/AsyncPickerContext';
import { isTextIncludedInString } from './utils/helpers';

const AsyncPickerComponent = <T,>(
  {
    modalProps,
    statusBarProps,
    headerProps,
    renderItem,
    keyExtractor,
    labelExtractor,
    data = [],
    limit = 0,
    value = [],
    onChange,
    isLoading = false,
    closeOnSelect = false,
    onClose,
    defaultButtonProps,
    label,
    isSearchable = true,
    searchStringExtractor,
    searchProps,
    defaultPickerItemProps,
    renderButton = ({ openModal }) => {
      return (
        <DefaultButton
          label={label}
          onPress={openModal}
          placeholder={
            value && value.length > 0
              ? value
                  .map((el) =>
                    labelExtractor ? labelExtractor(el) : keyExtractor(el)
                  )
                  .join(', ')
              : undefined
          }
          {...defaultButtonProps}
        />
      );
    },
    ...props
  }: AsyncPickerProps<T>,
  ref: React.ForwardedRef<AsyncPickerRef<T>>
) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { configs } = useAsyncPicker();
  const inputRef = useRef<TextInput | null>(null);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const onOptionPress = (option: T) => {
    if (limit !== 1) {
      if (value.find((el) => keyExtractor(el) === keyExtractor(option))) {
        onChange(
          value.filter((el) => keyExtractor(el) !== keyExtractor(option))
        );
        return;
      }
    }

    const selectedItems = limit === 1 ? [option] : [...value, option];
    if (limit && limit > 1 && selectedItems.length > limit) {
      return;
    }

    onChange(selectedItems);

    if (onClose) {
      onClose();
    }

    if (closeOnSelect) {
      closeModal();
    }
  };

  const getSearchResult = (query: string, _data: T[]): T[] => {
    const result = _data.filter((el) =>
      isTextIncludedInString(
        query,
        searchStringExtractor ? searchStringExtractor(el) : labelExtractor(el)
      )
    );
    return result || [];
  };

  React.useImperativeHandle(ref, () => ({
    openModal,
    closeModal,
    triggerOptionPress: (el) => {
      onOptionPress(el);
    },
    reset: () => {
      if (onChange) {
        onChange([]);
      }
    },
    getLocalSearchQuery: () => searchQuery,
    focusOnSearch: () => {
      if (inputRef.current) {
        console.log('hello focus');
        inputRef.current.focus();
      }
    },
  }));

  return (
    <View>
      {renderButton({ openModal, value })}
      <Modal
        animationType="slide"
        presentationStyle="formSheet"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={() => {
          closeModal();
        }}
        {...modalProps}
      >
        <SafeAreaView style={[{ flex: 1 }, configs.containerStyle]}>
          <StatusBar
            barStyle={Platform.OS === 'ios' ? 'light-content' : 'dark-content'}
            {...statusBarProps}
          />
          <Header
            label="Search"
            right={
              <LinkButton
                label="Close"
                onPress={closeModal}
                style={configs.headerTextStyle}
              />
            }
            left={isLoading ? <ActivityIndicator /> : undefined}
            {...headerProps}
          />

          {isSearchable && (
            <TextInput
              ref={inputRef}
              placeholder={'Search ...'}
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              selectTextOnFocus
              {...searchProps}
              value={searchProps?.value || searchQuery}
              onChangeText={(el) => {
                setSearchQuery(el);
                if (searchProps?.onChangeText) {
                  searchProps.onChangeText(el);
                }
              }}
              style={[configs.searchInputStyle, searchProps?.style]}
            />
          )}

          <FlatList
            data={searchQuery ? getSearchResult(searchQuery, data) : data}
            keyExtractor={keyExtractor}
            renderItem={({ item, index, separators }) => {
              const isActive = value.some(
                (el) => keyExtractor(el) === keyExtractor(item)
              );

              const disabled =
                !isActive && !!limit && limit > 1 && value.length === limit;

              return (
                <>
                  {renderItem ? (
                    renderItem({
                      item,
                      index,
                      separators,
                      isActive,
                      disabled,
                      closeModal,
                      onItemPress: onOptionPress,
                    })
                  ) : (
                    <PickerItem
                      label={labelExtractor(item)}
                      isActive={isActive}
                      disabled={disabled}
                      onPress={() => onOptionPress(item)}
                      {...defaultPickerItemProps}
                    />
                  )}
                </>
              );
            }}
            ListEmptyComponent={
              <AsyncPickerResult
                mode={!searchQuery ? 'beforeSearch' : 'afterSearch'}
                isVisible={!isLoading}
              />
            }
            {...props}
          />
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default forwardRef(AsyncPickerComponent);
