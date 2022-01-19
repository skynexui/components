import 'package:skynexui_components/components.dart';
import 'package:skynexui_components/components/box/flutter/hexcolor.dart';

class BoxBaseStyles {
  StyleSheet styleSheet;
  Breakpoints activeBreakpoint;
  dynamic padding;
  dynamic margin;
  dynamic backgroundColor;

  BoxBaseStyles({
    required this.styleSheet,
    required this.activeBreakpoint,
  }) {
    margin = resolveValueForBreakpoint(styleSheet.margin, activeBreakpoint);
    padding = resolveValueForBreakpoint(styleSheet.padding, activeBreakpoint);
    var backgroundColorValue =
        resolveValueForBreakpoint(styleSheet.backgroundColor, activeBreakpoint);
    backgroundColor = (backgroundColorValue != null)
        ? HexColor.fromHex(backgroundColorValue)
        : Colors.transparent;
  }
}
