import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { twColors } from 'react-native-async-picker';

interface SimpleButtonProps extends TouchableOpacityProps {
  label: string;
}
const SimpleButton: React.FC<SimpleButtonProps> = ({ label, ...props }) => {
  return (
    <TouchableOpacity {...props}>
      <Text style={{ textAlign: 'center', color: twColors.blue[500] }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default SimpleButton;
