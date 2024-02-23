import React from 'react';
import { Image, Text, View } from 'react-native';
import type { ViewProps } from 'react-native';
import { useAsyncPicker } from '../utils/AsyncPickerContext';

interface AsyncPickerResultProps extends ViewProps {
  mode: 'beforeSearch' | 'afterSearch';
  isVisible?: boolean;
}
const AsyncPickerResult: React.FC<AsyncPickerResultProps> = ({
  mode,
  isVisible,
  ...props
}) => {
  const { configs } = useAsyncPicker();

  if (!isVisible) {
    return null;
  }
  return (
    <View {...props}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {mode === 'beforeSearch' && (
          <>
            <Image
              source={require('../assets/search.png')}
              style={{ width: 128, height: 128 }}
            />
            <Text style={[configs.resultTextStyle]}>Try some keywords ...</Text>
          </>
        )}

        {mode === 'afterSearch' && (
          <>
            <Image
              source={require('../assets/not-found.png')}
              style={{ width: 256, height: 256 }}
            />
            <Text style={[configs.resultTextStyle]}>No results</Text>
          </>
        )}
      </View>
    </View>
  );
};

export default AsyncPickerResult;
