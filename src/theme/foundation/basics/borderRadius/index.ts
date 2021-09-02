// TODO: Add support to it
const borderRadius = {
  none: '0',
  sm: '2px', // .125rem
  md: '4px', // .25rem
  lg: '8px', // .5rem
  full: '9999px',
} as const;

export type BorderRadiusNames = keyof typeof borderRadius;
export type BorderRadiusValues = typeof borderRadius[BorderRadiusNames];
export type BorderRadiusTheme = Record<BorderRadiusNames, BorderRadiusValues>;

export default borderRadius;
