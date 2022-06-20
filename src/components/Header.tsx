import React from 'react';
import { Text, View, ViewProps } from 'react-native';
import { useAsyncPicker } from '../utils/AsyncPickerContext';

export interface HeaderProps extends ViewProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  label?: string | React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({
  left,
  right,
  label = 'Search',
  ...props
}) => {
  const { configs } = useAsyncPicker();
  const isLabelString = typeof label === 'string';

  return (
    <View {...props}>
      <View style={configs.headerContainerStyle}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          {left}
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {isLabelString && (
            <Text numberOfLines={1} style={[configs.headerTitleStyle]}>
              {label}
            </Text>
          )}
          {!isLabelString && label}
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          {right}
        </View>
      </View>
    </View>
  );
};

export default Header;
