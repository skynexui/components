import 'package:skynexui_components/components.dart';
import 'package:skynexui_components/components/box/flutter/hexcolor.dart';

class BoxBaseStyles {
  StyleSheet styleSheet;
  Breakpoints activeBreakpoint;
  dynamic width;
  dynamic height;
  dynamic color;
  dynamic backgroundColor;
  dynamic padding;
  dynamic paddingTop;
  dynamic paddingLeft;
  dynamic paddingRight;
  dynamic paddingBottom;
  dynamic paddingVertical;
  dynamic paddingHorizontal;
  dynamic margin;
  dynamic marginTop;
  dynamic marginLeft;
  dynamic marginRight;
  dynamic marginBottom;
  dynamic marginVertical;
  dynamic marginHorizontal;
  dynamic position;
  dynamic flexDirection;
  dynamic crossAxisAlignment = 'flex-start';
  dynamic mainAxisAlignment = 'flex-start';

  BoxBaseStyles({
    required this.styleSheet,
    required this.activeBreakpoint,
  }) {
    // [width]
    width = resolveValueForBreakpoint(styleSheet.width, activeBreakpoint);
    // [height]
    height = resolveValueForBreakpoint(styleSheet.height, activeBreakpoint);

    // [color]
    var colorValue =
        resolveValueForBreakpoint(styleSheet.color, activeBreakpoint);
    color = (colorValue != null) ? HexColor.fromHex(colorValue) : Colors.black;

    // [backgroundColor]
    var backgroundColorValue =
        resolveValueForBreakpoint(styleSheet.backgroundColor, activeBreakpoint);
    backgroundColor = (backgroundColorValue != null)
        ? HexColor.fromHex(backgroundColorValue)
        : Colors.transparent;

    // [margin]
    margin = resolveValueForBreakpoint(styleSheet.margin, activeBreakpoint);
    marginVertical =
        resolveValueForBreakpoint(styleSheet.marginVertical, activeBreakpoint);
    marginHorizontal = resolveValueForBreakpoint(
        styleSheet.marginHorizontal, activeBreakpoint);
    marginTop =
        resolveValueForBreakpoint(styleSheet.marginTop, activeBreakpoint) ??
            marginVertical ??
            margin;
    marginLeft =
        resolveValueForBreakpoint(styleSheet.marginLeft, activeBreakpoint) ??
            marginHorizontal ??
            margin;
    marginRight =
        resolveValueForBreakpoint(styleSheet.marginRight, activeBreakpoint) ??
            marginHorizontal ??
            margin;
    marginBottom =
        resolveValueForBreakpoint(styleSheet.marginBottom, activeBreakpoint) ??
            marginVertical ??
            margin;
    // [padding]
    padding = resolveValueForBreakpoint(styleSheet.padding, activeBreakpoint);
    paddingVertical =
        resolveValueForBreakpoint(styleSheet.paddingVertical, activeBreakpoint);
    paddingHorizontal = resolveValueForBreakpoint(
        styleSheet.paddingHorizontal, activeBreakpoint);
    paddingTop =
        resolveValueForBreakpoint(styleSheet.paddingTop, activeBreakpoint) ??
            paddingVertical ??
            padding;
    paddingLeft =
        resolveValueForBreakpoint(styleSheet.paddingLeft, activeBreakpoint) ??
            paddingHorizontal ??
            padding;
    paddingRight =
        resolveValueForBreakpoint(styleSheet.paddingRight, activeBreakpoint) ??
            paddingHorizontal ??
            padding;
    paddingBottom =
        resolveValueForBreakpoint(styleSheet.paddingBottom, activeBreakpoint) ??
            paddingVertical ??
            padding;

    // [flexDirection]
    flexDirection =
        resolveValueForBreakpoint(styleSheet.flexDirection, activeBreakpoint) ??
            flexDirection;

    // [mainAxisAlignment|justifyContent]
    var justifyContent =
        resolveValueForBreakpoint(styleSheet.justifyContent, activeBreakpoint);
    mainAxisAlignment = resolveValueForBreakpoint(
            styleSheet.mainAxisAlignment, activeBreakpoint) ??
        justifyContent ??
        mainAxisAlignment;

    // [crossAxisAlignment|alignItems]
    var alignItems =
        resolveValueForBreakpoint(styleSheet.alignItems, activeBreakpoint);
    crossAxisAlignment = resolveValueForBreakpoint(
            styleSheet.crossAxisAlignment, activeBreakpoint) ??
        alignItems ??
        crossAxisAlignment;
  }
}
