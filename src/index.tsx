import React from 'react';
import AsyncPickerComponent from './AsyncPicker';
import { AsyncPickerProvider } from './utils/AsyncPickerContext';
import PickerItem from './components/PickerItem';
import type { PickerItemProps } from './components/PickerItem';
import type { AsyncPickerProps, AsyncPickerRef } from './types';
import * as helpers from './utils/helpers';
import twColors from './utils/twColors';
import { defaultLightColors, defaultDarkColors } from './utils/colors';
import type { ColorProps } from './utils/colors';

declare module 'react' {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

const AsyncPickerWrapper = <T,>(
  { ...props }: AsyncPickerProps<T>,
  ref: React.ForwardedRef<AsyncPickerRef<T>>
) => {
  return (
    <AsyncPickerProvider>
      <AsyncPickerComponent {...props} ref={ref} />
    </AsyncPickerProvider>
  );
};

const AsyncPicker = React.forwardRef(AsyncPickerWrapper);

export {
  AsyncPicker,
  AsyncPickerProps,
  PickerItem,
  PickerItemProps,
  helpers,
  twColors,
  defaultLightColors,
  defaultDarkColors,
  ColorProps,
  AsyncPickerRef,
};

export default AsyncPicker;
