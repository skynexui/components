import 'package:skynexui_components/components/provider/flutter/theme.dart';
import 'package:skynexui_components/core/theme/theme.dart';

enum Breakpoints {
  xs,
  sm,
  md,
  lg,
  xl,
}

class ThemeBreakpoints {
  double xs = double.parse(skynexUIBaseTheme['breakpoints']!['Breakpoints.xs']);
  double sm = double.parse(skynexUIBaseTheme['breakpoints']!['Breakpoints.sm']);
  double md = double.parse(skynexUIBaseTheme['breakpoints']!['Breakpoints.md']);
  double lg = double.parse(skynexUIBaseTheme['breakpoints']!['Breakpoints.lg']);
  double xl = double.parse(skynexUIBaseTheme['breakpoints']!['Breakpoints.xl']);
}

Breakpoints getCurrentBreakpoint(double screenWidth, Theme theme) {
  if (screenWidth < theme.breakpoints.sm) {
    return Breakpoints.xs;
  }
  if (screenWidth < theme.breakpoints.md) {
    return Breakpoints.sm;
  }

  if (screenWidth < theme.breakpoints.lg) {
    return Breakpoints.md;
  }

  if (screenWidth < theme.breakpoints.xl) {
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
