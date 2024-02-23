import React from 'react';
import { Text, useColorScheme, View } from 'react-native';
import type { ViewProps } from 'react-native';
import { twColors } from 'react-native-async-picker';

interface SectionProps extends ViewProps {
  label?: string;
  description?: string;
  link?: [string, string];
}

const Section: React.FC<SectionProps> = ({
  label,
  description,
  children,
  ...props
}) => {
  const isDark = useColorScheme() === 'dark';
  return (
    <View
      {...props}
      style={[
        {
          marginBottom: 16,
          paddingHorizontal: 16,
          paddingTop: label ? 0 : 8,
          paddingBottom: description ? 16 : 24,
          backgroundColor: isDark ? '#000000' : '#ffffff',
          borderBottomWidth: 16,
          borderColor: isDark
            ? 'rgba(255, 255, 255, 0.05)'
            : twColors.slate[100],
        },
        props.style,
      ]}
    >
      {!!label && (
        <Text
          style={{
            textAlign: 'center',
            color: twColors.slate[400],
            marginBottom: 16,
          }}
        >
          {label}
        </Text>
      )}
      {children}
      {!!description && (
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 6,
              marginTop: 3,
              marginRight: 8,
              backgroundColor: twColors.yellow[400],
            }}
          />
          <Text
            style={{
              color: twColors.slate[400],
              fontWeight: '500',
              flex: 1,
              fontStyle: 'italic',
              fontSize: 13,
            }}
          >
            {description}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Section;
