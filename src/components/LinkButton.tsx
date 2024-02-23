import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type { TouchableOpacityProps } from 'react-native';
import { useAsyncPicker } from '../utils/AsyncPickerContext';

interface LinkButtonProps extends TouchableOpacityProps {
  label?: string;
}
const LinkButton: React.FC<LinkButtonProps> = ({ label, style, ...props }) => {
  const { configs } = useAsyncPicker();
  return (
    <TouchableOpacity {...props}>
      <Text style={[configs.textLinkStyle, style]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default LinkButton;
