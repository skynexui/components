
const breakpoints = {
  xs: '0px',
  sm: '480px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
} as const;

export type BreakpointsNames = keyof typeof breakpoints;
export type BreakpointsValues = typeof breakpoints[BreakpointsNames];
export type BreakpointsTheme = Record<BreakpointsNames, BreakpointsValues>;

export default breakpoints;
