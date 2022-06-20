import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import type { DefaultButtonProps } from '../types';
import { useAsyncPicker } from '../utils/AsyncPickerContext';

const DefaultButton: React.FC<DefaultButtonProps> = ({
  placeholder = 'Select ...',
  label,
  caretIcon,
  style,
  ...props
}) => {
  const { configs } = useAsyncPicker();
  const isPlaceholderString = !!placeholder && typeof placeholder === 'string';
  const isLabelString = !!label && typeof placeholder === 'string';

  const getCaretIcon = () => {
    if (caretIcon) {
      return caretIcon;
    }

    return (
      <Image
        source={require('../assets/caret-down.png')}
        style={configs.buttonCaretImageStyle}
      />
    );
  };
  return (
    <View style={[configs.buttonContainerStyle]}>
      {!!label && (
        <View>
          {isLabelString ? (
            <Text style={[configs.buttonLabelStyle]}>{label}</Text>
          ) : (
            label
          )}
        </View>
      )}
      <TouchableOpacity
        activeOpacity={0.7}
        style={[configs.buttonStyle, style]}
        {...props}
      >
        {placeholder ? (
          isPlaceholderString ? (
            <Text style={[configs.buttonTextStyle]}>{placeholder}</Text>
          ) : (
            placeholder
          )
        ) : null}

        {getCaretIcon()}
      </TouchableOpacity>
    </View>
  );
};

export default DefaultButton;
