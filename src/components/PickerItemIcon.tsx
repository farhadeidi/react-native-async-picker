import React from 'react';
import { View, ViewProps } from 'react-native';
import twColors from '../utils/twColors';

interface PickerItemIconProps extends ViewProps {
  isActive?: boolean;
  size?: number;
  borderRadius?: number;
  color?: string;
  activeColor?: string;
}
const PickerItemIcon = React.memo<PickerItemIconProps>(
  ({
    isActive,
    borderRadius = 10,
    size = 20,
    style,
    color = twColors.slate[200],
    activeColor = twColors.blue[500],
    ...props
  }) => {
    return (
      <View
        style={[
          {
            width: size,
            height: size,
            borderRadius: borderRadius,
            marginRight: 8,
            backgroundColor: isActive ? activeColor : color,
          },
          style,
        ]}
        {...props}
      />
    );
  }
);

export default PickerItemIcon;
