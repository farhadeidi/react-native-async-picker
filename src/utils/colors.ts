import twColors from './twColors';

export const defaultLightColors = {
  backgroundColor: '#ffffff',
  textDefaultColor: '#222222',
  textLinkColor: '#38bdf8',
  borderColor: 'rgba(0, 0, 0, 0.1)',
  chipsItemBackgroundColor: '#f1f5f9',
  chipsItemBorderColor: '#e2e8f0',
  chipsItemCloseButtonBackgroundColor: '#e2e8f0',
  chipsItemCloseButtonIconColor: '#94a3b8',
  checkboxOff: twColors.slate[200],
  checkboxOn: twColors.blue[500],
  buttonBackgroundColor: 'transparent',
  buttonBorderColor: twColors.slate[200],
  buttonLabelColor: twColors.slate[700],
  buttonTextColor: twColors.slate[500],
  buttonCaretColor: twColors.slate[600],
};

export const defaultDarkColors: typeof defaultLightColors = {
  backgroundColor: '#000000',
  textDefaultColor: '#ffffff',
  textLinkColor: '#38bdf8',
  borderColor: 'rgba(255, 255, 255, 0.25)',
  chipsItemBackgroundColor: '#334155',
  chipsItemBorderColor: '#334155',
  chipsItemCloseButtonBackgroundColor: '#94a3b8',
  chipsItemCloseButtonIconColor: '#0f172a',
  checkboxOff: twColors.slate[700],
  checkboxOn: twColors.blue[500],
  buttonBackgroundColor: 'transparent',
  buttonBorderColor: twColors.slate[600],
  buttonLabelColor: twColors.slate[100],
  buttonTextColor: twColors.slate[300],
  buttonCaretColor: twColors.slate[400],
};

export type ColorProps = {
  [K in keyof typeof defaultLightColors]: string;
};

export const defaultColors = {
  light: defaultLightColors,
  dark: defaultDarkColors,
};
