import React, { createContext, useState, useContext, useEffect } from 'react';
import {
  ImageStyle,
  StyleProp,
  TextStyle,
  useColorScheme,
  ViewStyle,
} from 'react-native';
import { defaultColors, defaultLightColors } from './colors';

export type ColorsProps = typeof defaultLightColors;

const defaultSizes = {
  screenPadding: 16,
  buttonHeight: 54,
  searchHeight: 54,

  chipsItemHeight: 44,
  chipsItemBorderRadius: 12,
  chipsItemGapSize: 6,
  chipsItemPaddingLeft: 12,
  chipsItemPaddingRight: 12,

  checkboxSize: 20,
  checkboxBorderRadius: 4,
};

export interface InitialConfigsProps {
  colors: ColorsProps;
  sizes: typeof defaultSizes;
  textBaseStyle: StyleProp<TextStyle>;
  textLinkStyle: StyleProp<TextStyle>;
  buttonContainerStyle: StyleProp<ViewStyle>;
  buttonLabelStyle: StyleProp<TextStyle>;
  buttonStyle: StyleProp<ViewStyle>;
  buttonTextStyle: StyleProp<TextStyle>;
  buttonCaretImageStyle: StyleProp<ImageStyle>;
  containerStyle: StyleProp<ViewStyle>;
  chipsGridStyle: StyleProp<ViewStyle>;
  chipsItemContainerStyle: StyleProp<ViewStyle>;
  chipsItemCloseButtonStyle: StyleProp<ViewStyle>;
  chipsItemCloseIconStyle: StyleProp<ImageStyle>;
  chipsItemTextStyle: StyleProp<TextStyle>;
  headerContainerStyle: StyleProp<ViewStyle>;
  headerTextStyle: StyleProp<TextStyle>;
  headerTitleStyle: StyleProp<TextStyle>;
  searchInputStyle: StyleProp<ViewStyle>;
  pickerItemContainerStyle: StyleProp<ViewStyle>;
  pickerItemTextStyle: StyleProp<TextStyle>;
  pickerItemIconStyle: StyleProp<ImageStyle>;
  pickerItemActiveIconStyle: StyleProp<ImageStyle>;
  pickerItemDisabledStyle: StyleProp<ViewStyle>;
}

const getInitialConfigs = (
  props: InitialConfigsProps | undefined,
  scheme: 'dark' | 'light' = 'light'
): InitialConfigsProps => {
  const baseColors = { ...defaultColors[scheme], ...props?.colors };
  const sizes = { ...defaultSizes, ...props?.sizes };
  const defaultTextStyle: StyleProp<TextStyle> = [
    { color: baseColors.textDefaultColor },
    props?.textBaseStyle,
  ];

  return {
    colors: baseColors,
    sizes: sizes,
    textBaseStyle: defaultTextStyle,

    textLinkStyle: [
      ...defaultTextStyle,
      { color: baseColors.textLinkColor },
      props?.textLinkStyle,
    ],

    buttonContainerStyle: [{}, props?.buttonContainerStyle],

    buttonStyle: [
      {
        minHeight: sizes.buttonHeight,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: baseColors.buttonBackgroundColor,
        borderWidth: 1,
        borderColor: baseColors.buttonBorderColor,
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 5,
      },
      props?.buttonStyle,
    ],

    buttonLabelStyle: [
      ...defaultTextStyle,
      {
        color: baseColors.buttonLabelColor,
        fontWeight: 'bold',
        marginVertical: 4,
      },
      props?.buttonLabelStyle,
    ],

    buttonTextStyle: [
      ...defaultTextStyle,
      {
        color: baseColors.buttonTextColor,
        fontWeight: 'bold',
        flex: 1,
      },
      props?.buttonTextStyle,
    ],
    buttonCaretImageStyle: [
      {
        width: 20,
        height: 20,
        tintColor: baseColors.buttonCaretColor,
      },
      props?.buttonCaretImageStyle,
    ],

    containerStyle: [
      {
        backgroundColor: baseColors.backgroundColor,
      },
      props?.containerStyle,
    ],

    chipsGridStyle: [
      {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginLeft: -sizes.chipsItemGapSize / 2,
        marginRight: -sizes.chipsItemGapSize / 2,
      },
      props?.chipsGridStyle,
    ],

    chipsItemContainerStyle: [
      {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: sizes.chipsItemHeight,
        borderRadius: sizes.chipsItemBorderRadius,
        margin: sizes.chipsItemGapSize / 2,
        paddingLeft: sizes.chipsItemPaddingLeft,
        paddingRight: sizes.chipsItemPaddingRight,
        backgroundColor: baseColors.chipsItemBackgroundColor,
        borderWidth: 1,
        borderColor: baseColors.chipsItemBorderColor,
      },
      props?.chipsItemContainerStyle,
    ],

    chipsItemCloseButtonStyle: [
      {
        backgroundColor: baseColors.chipsItemCloseButtonBackgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
        aspectRatio: 1 / 1,
        padding: 8,
        borderRadius: 99,
      },
      props?.chipsItemCloseButtonStyle,
    ],

    chipsItemCloseIconStyle: [
      {
        width: 16,
        height: 16,
        tintColor: baseColors.chipsItemCloseButtonIconColor,
      },
      props?.chipsItemCloseIconStyle,
    ],

    chipsItemTextStyle: [
      ...defaultTextStyle,
      {
        fontWeight: 'bold',
      },
      props?.chipsItemCloseIconStyle,
    ],

    headerContainerStyle: [
      {
        height: 54,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: baseColors.borderColor,
      },
      props?.headerContainerStyle,
    ],
    headerTextStyle: [...defaultTextStyle, {}, props?.headerTextStyle],
    headerTitleStyle: [
      ...defaultTextStyle,
      { textAlign: 'center', fontWeight: 'bold' },
      props?.headerTitleStyle,
    ],
    searchInputStyle: [
      {
        height: sizes.searchHeight,
        margin: sizes.screenPadding,
        borderWidth: 1,
        borderColor: baseColors.borderColor,
        borderRadius: sizes.searchHeight / 2,
        paddingHorizontal: 16,
      },
      props?.searchInputStyle,
    ],

    pickerItemContainerStyle: [
      {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        opacity: 1,
      },
      props?.pickerItemContainerStyle,
    ],
    pickerItemTextStyle: [
      ...defaultTextStyle,
      { flex: 1 },
      props?.pickerItemTextStyle,
    ],
    pickerItemIconStyle: [
      {
        width: 24,
        height: 24,
        marginRight: 8,
        tintColor: baseColors.chipsItemCloseButtonIconColor,
      },
      props?.pickerItemIconStyle,
    ],
    pickerItemActiveIconStyle: [
      { tintColor: baseColors.textDefaultColor },
      props?.pickerItemActiveIconStyle,
    ],
    pickerItemDisabledStyle: [{ opacity: 0.5 }, props?.pickerItemDisabledStyle],
  };
};

export interface AsyncPickerContextProps {
  configs: InitialConfigsProps;
  setConfigs: (configs: InitialConfigsProps) => void;
}

const AsyncPickerContext = createContext<AsyncPickerContextProps | undefined>(
  undefined
);

const AsyncPickerProvider = ({
  children,
  configParams = undefined,
}: {
  children: React.ReactNode;
  configParams?: InitialConfigsProps;
}) => {
  const colorScheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const [configs, setConfigs] = useState(getInitialConfigs(configParams));

  useEffect(() => {
    setConfigs(getInitialConfigs(configParams, colorScheme));
  }, [configParams, colorScheme]);

  return (
    <AsyncPickerContext.Provider
      value={
        {
          configs,
          setConfigs,
        } as AsyncPickerContextProps
      }
    >
      {children}
    </AsyncPickerContext.Provider>
  );
};

function useAsyncPicker() {
  const context = useContext(AsyncPickerContext);

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }

  return context;
}

export { AsyncPickerProvider, useAsyncPicker };
