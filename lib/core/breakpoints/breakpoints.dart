enum Breakpoints {
  xs,
  sm,
  md,
  lg,
  xl,
}

const Map<Breakpoints, double> defaultBreakpoints = {
  Breakpoints.xs: 0,
  Breakpoints.sm: 480,
  Breakpoints.md: 768,
  Breakpoints.lg: 992,
  Breakpoints.xl: 1200,
};

Breakpoints getCurrentBreakpoint(double screenWidth) {
  if (screenWidth < 480) {
    return Breakpoints.xs;
  }
  if (screenWidth < 768) {
    return Breakpoints.sm;
  }

  if (screenWidth < 992) {
    return Breakpoints.md;
  }

  if (screenWidth < 1200) {
    return Breakpoints.lg;
  }

  return Breakpoints.xl;
}

// ============================================================
// [Value resolver]
// ============================================================
const Map<Breakpoints, double> breakpointsOrderByBreakpoint = {
  Breakpoints.xs: 0,
  Breakpoints.sm: 1,
  Breakpoints.md: 2,
  Breakpoints.lg: 3,
  Breakpoints.xl: 4,
};
const Map<int, Breakpoints> breakpointsOrderByOrder = {
  0: Breakpoints.xs,
  1: Breakpoints.sm,
  2: Breakpoints.md,
  3: Breakpoints.lg,
  4: Breakpoints.xl,
};
dynamic resolveValueForBreakpoint(
    Map<Breakpoints, dynamic> value, Breakpoints activeBreakpoint) {
  if (value.containsKey(activeBreakpoint) && value[activeBreakpoint] != null) {
    return value[activeBreakpoint];
  }

  var currentBreakpointOrder = breakpointsOrderByBreakpoint[activeBreakpoint];

  // ignore: todo
  // TODO: I know that I can do it better, but not now
  for (var i = currentBreakpointOrder; i! >= 0; i--) {
    var breakpoint = breakpointsOrderByOrder[i];
    if (value.containsKey(breakpoint) && value[breakpoint] != null) {
      return value[breakpoint];
    }
  }
}
