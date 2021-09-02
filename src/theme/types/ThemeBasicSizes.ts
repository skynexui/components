const sizes = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
};

export type ThemeBasicSizes = keyof typeof sizes;
export type RecordOfThemeBasicSizes<T> = Partial<Record<ThemeBasicSizes, T>>;
