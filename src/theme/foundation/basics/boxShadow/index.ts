// TODO: Add support to it
const boxShadow = {
  xs: '0 1px 2px rgba(0, 0, 0, 0.05)',  // xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 5px rgba(0, 0, 0, 0.05)',  // sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px rgba(0, 0, 0, 0.08)',  // md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.5)', // lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.4)', // xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  none: 'none',
} as const;

export type BoxShadowNames = keyof typeof boxShadow;
export type BoxShadowValues = typeof boxShadow[BoxShadowNames];
export type BoxShadowTheme = Record<BoxShadowNames, BoxShadowValues>;

export default boxShadow;


