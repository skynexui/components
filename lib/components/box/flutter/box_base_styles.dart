import 'package:skynexui_components/components.dart';
import 'package:skynexui_components/components/box/flutter/hexcolor.dart';

Color colorResolver(String? value) {
  if (value == null) return Colors.transparent;
  if (value.startsWith('transparent')) return Colors.transparent;
  if (value.startsWith('#')) return HexColor.fromHex(value);
  if (value.startsWith('rgba')) {
    var matchColorValues = RegExp(r'rgba?\((\d+),(\d+),(\d+),?([\d.]+)?');
    final match = matchColorValues.firstMatch(value);

    int r = int.parse(match!.group(1)!);
    int g = int.parse(match.group(2)!);
    int b = int.parse(match.group(3)!);
    double a = double.parse(match.group(4)!);
    return Color.fromRGBO(r, g, b, a);
  }
  if (value.startsWith('rgb')) {
    var matchColorValues = RegExp(r'rgba?\((\d+),(\d+),(\d+),?([\d.]+)?');
    final match = matchColorValues.firstMatch(value);

    int r = int.parse(match!.group(1)!);
    int g = int.parse(match.group(2)!);
    int b = int.parse(match.group(3)!);
    return Color.fromRGBO(r, g, b, 1);
  }

  return Colors.transparent;
}

class BoxBaseStyles {
  StyleSheet styleSheet;
  Breakpoints activeBreakpoint;
  dynamic width;
  dynamic height;
  dynamic color = '#000000';
  dynamic backgroundColor = 'transparent';
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
  dynamic flex;
  dynamic crossAxisAlignment = 'flex-start';
  dynamic mainAxisAlignment = 'flex-start';
  dynamic overflowY;
  dynamic borderRadius;
  dynamic borderRadiusTopLeft;
  dynamic borderRadiusTopRight;
  dynamic borderRadiusBottomLeft;
  dynamic borderRadiusBottomRight;
  dynamic boxShadowOffsetX = 0;
  dynamic boxShadowOffsetY = 0;
  dynamic boxShadowBlur = 0;
  dynamic boxShadowSpread = 0;
  dynamic boxShadowColor;

  BoxBaseStyles({
    required this.styleSheet,
    required this.activeBreakpoint,
  }) {
    // [width]
    var baseWidth =
        resolveValueForBreakpoint(styleSheet.width, activeBreakpoint);
    if (baseWidth != null) {
      width = double.parse(baseWidth);
    }
    // [height]
    var baseHeight =
        resolveValueForBreakpoint(styleSheet.height, activeBreakpoint);
    if (baseHeight != null) {
      height = double.parse(baseHeight);
    }

    // [color]
    color = colorResolver(
        resolveValueForBreakpoint(styleSheet.color, activeBreakpoint) ?? color);

    // [backgroundColor]
    backgroundColor = colorResolver(resolveValueForBreakpoint(
            styleSheet.backgroundColor, activeBreakpoint) ??
        backgroundColor);

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

    // [flex]
    flex = resolveValueForBreakpoint(styleSheet.flex, activeBreakpoint);

    // [overflowY]
    overflowY =
        resolveValueForBreakpoint(styleSheet.overflowY, activeBreakpoint);

    // [borderRadius]
    var borderRadiusValue =
        resolveValueForBreakpoint(styleSheet.borderRadius, activeBreakpoint);
    borderRadius =
        (borderRadiusValue != null) ? double.parse(borderRadiusValue) : 0;

    var borderRadiusTopLeftValue = resolveValueForBreakpoint(
        styleSheet.borderRadiusTopLeft, activeBreakpoint);
    borderRadiusTopLeft = (borderRadiusTopLeftValue != null)
        ? double.parse(borderRadiusTopLeftValue)
        : borderRadius;

    var borderRadiusTopRightValue = resolveValueForBreakpoint(
        styleSheet.borderRadiusTopRight, activeBreakpoint);
    borderRadiusTopRight = (borderRadiusTopRightValue != null)
        ? double.parse(borderRadiusTopRightValue)
        : borderRadius;

    var borderRadiusBottomLeftValue = resolveValueForBreakpoint(
        styleSheet.borderRadiusBottomLeft, activeBreakpoint);
    borderRadiusBottomLeft = (borderRadiusBottomLeftValue != null)
        ? double.parse(borderRadiusBottomLeftValue)
        : borderRadius;

    var borderRadiusBottomRightValue = resolveValueForBreakpoint(
        styleSheet.borderRadiusBottomRight, activeBreakpoint);
    borderRadiusBottomRight = (borderRadiusBottomRightValue != null)
        ? double.parse(borderRadiusBottomRightValue)
        : borderRadius;

    // [boxShadow]
    boxShadowOffsetX = resolveValueForBreakpoint(
            styleSheet.boxShadowOffsetX, activeBreakpoint) ??
        boxShadowOffsetX;
    boxShadowOffsetY = resolveValueForBreakpoint(
            styleSheet.boxShadowOffsetY, activeBreakpoint) ??
        boxShadowOffsetY;
    boxShadowBlur =
        resolveValueForBreakpoint(styleSheet.boxShadowBlur, activeBreakpoint) ??
            boxShadowBlur;
    boxShadowSpread = resolveValueForBreakpoint(
            styleSheet.boxShadowSpread, activeBreakpoint) ??
        boxShadowSpread;
    // fromRGBA -> to Colors. ...
    // add support to transparent color in Hex and RGBA
    // boxShadowColor = Colors.black.withOpacity(0.5);
    boxShadowColor = colorResolver(resolveValueForBreakpoint(
            styleSheet.boxShadowColor, activeBreakpoint) ??
        boxShadowColor);
  }
}
