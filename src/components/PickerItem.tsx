import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useAsyncPicker } from '../utils/AsyncPickerContext';
import PickerItemIcon from './PickerItemIcon';

export interface PickerItemProps extends TouchableOpacityProps {
  label: string;
  isActive?: boolean;
  asRadio?: boolean;
}

const PickerItem: React.FC<PickerItemProps> = ({
  label,
  isActive = false,
  asRadio = false,
  style,
  ...props
}) => {
  const { configs } = useAsyncPicker();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        configs.pickerItemContainerStyle,
        props.disabled && configs.pickerItemDisabledStyle,
        style,
      ]}
      {...props}
    >
      <PickerItemIcon
        isActive={isActive}
        color={configs.colors.checkboxOff}
        activeColor={configs.colors.checkboxOn}
        size={configs.sizes.checkboxSize}
        borderRadius={
          asRadio
            ? configs.sizes.checkboxSize / 2
            : configs.sizes.checkboxBorderRadius
        }
      />
      <Text numberOfLines={1} style={configs.pickerItemTextStyle}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default PickerItem;
