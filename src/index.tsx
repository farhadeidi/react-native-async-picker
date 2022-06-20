import React from 'react';
import AsyncPickerComponent from './AsyncPicker';
import { AsyncPickerProvider } from './utils/AsyncPickerContext';
import PickerItem, { PickerItemProps } from './components/PickerItem';
import type { AsyncPickerProps } from './types';
import * as helpers from './utils/helpers';

const AsyncPicker = <T,>(props: AsyncPickerProps<T>) => {
  return (
    <AsyncPickerProvider>
      <AsyncPickerComponent {...props} />
    </AsyncPickerProvider>
  );
};

export { AsyncPicker, AsyncPickerProps, PickerItem, PickerItemProps, helpers };
export default AsyncPicker;
