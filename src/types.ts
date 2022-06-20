import type {
  FlatListProps,
  ListRenderItemInfo,
  ModalProps,
  StatusBarProps,
  TextInputProps,
  TouchableOpacityProps,
} from 'react-native';
import type { HeaderProps } from './components/Header';

export interface RenderPickerItemProps<T> extends ListRenderItemInfo<T> {
  onItemPress: (item: T) => void;
  isActive: boolean;
  disabled: boolean;
  closeModal: () => void;
}

export interface AsyncPickerProps<T>
  extends Omit<FlatListProps<T>, 'renderItem'> {
  label?: string | JSX.Element;
  modalProps?: Partial<ModalProps>;
  statusBarProps?: StatusBarProps;
  headerProps?: HeaderProps;
  isSearchable?: boolean;
  searchProps?: TextInputProps;
  limit?: number;
  keyExtractor: (item: T) => string;
  labelExtractor: (item: T) => string;
  renderItem?: (renderProps: RenderPickerItemProps<T>) => JSX.Element;
  data: T[];
  value: T[];
  onChange: (item: T[]) => void;
  onClose?: () => void;
  onOpen?: () => void;
  searchStringExtractor?: (item: T) => string;
  closeOnSelect?: boolean;
  isLoading?: boolean;
  renderButton?: ({ openModal, value }: RenderButtonProps<T>) => JSX.Element;
  defaultButtonProps?: Omit<DefaultButtonProps, 'label'>;
  noResultComponent?: (query: string) => JSX.Element;
}

export type RenderButtonProps<T> = {
  openModal: () => void;
  value: T[];
};

export interface DefaultButtonProps extends TouchableOpacityProps {
  placeholder?: string | JSX.Element;
  label?: string | JSX.Element;
  caretIcon?: JSX.Element;
}
