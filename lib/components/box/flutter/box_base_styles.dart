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

double? doubleValueResolver(value, defaultValue, activeBreakpoint) {
  var baseValue = resolveValueForBreakpoint(
    value,
    activeBreakpoint,
  );
  return (baseValue != null)
      ? double.parse(baseValue.replaceAll('px', ''))
      : defaultValue;
}

int? intValueResolver(value, defaultValue, activeBreakpoint) {
  var baseValue = resolveValueForBreakpoint(
    value,
    activeBreakpoint,
  );
  return (baseValue != null)
      ? int.parse(baseValue.replaceAll('px', ''))
      : defaultValue;
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
  dynamic flexDirection;
  dynamic flex;
  dynamic crossAxisAlignment = 'flex-start';
  dynamic mainAxisAlignment = 'flex-start';
  dynamic overflowY;
  dynamic borderRadius = 0.0;
  dynamic borderRadiusTopLeft;
  dynamic borderRadiusTopRight;
  dynamic borderRadiusBottomLeft;
  dynamic borderRadiusBottomRight;
  double boxShadowOffsetX = 0;
  double boxShadowOffsetY = 0;
  double boxShadowBlur = 0;
  double boxShadowSpread = 0;
  dynamic boxShadowColor;
  dynamic position;
  dynamic top;
  dynamic right;
  dynamic left;
  dynamic bottom;

  BoxBaseStyles({
    required this.styleSheet,
    required this.activeBreakpoint,
  }) {
    // [width]
    width = doubleValueResolver(
      styleSheet.width,
      width,
      activeBreakpoint,
    );
    // [height]
    height = doubleValueResolver(
      styleSheet.height,
      height,
      activeBreakpoint,
    );

    // [color]
    color = colorResolver(
        resolveValueForBreakpoint(styleSheet.color, activeBreakpoint) ?? color);

    // [backgroundColor]
    backgroundColor = colorResolver(resolveValueForBreakpoint(
            styleSheet.backgroundColor, activeBreakpoint) ??
        backgroundColor);

    // [margin]
    margin = doubleValueResolver(styleSheet.margin, margin, activeBreakpoint);
    marginVertical = doubleValueResolver(
        styleSheet.marginVertical, marginVertical, activeBreakpoint);
    marginHorizontal = doubleValueResolver(
        styleSheet.marginHorizontal, marginHorizontal, activeBreakpoint);
    marginTop = doubleValueResolver(
          styleSheet.marginTop,
          marginTop,
          activeBreakpoint,
        ) ??
        marginVertical ??
        margin;
    marginBottom = doubleValueResolver(
          styleSheet.marginBottom,
          marginBottom,
          activeBreakpoint,
        ) ??
        marginVertical ??
        margin;
    marginLeft = doubleValueResolver(
          styleSheet.marginLeft,
          marginLeft,
          activeBreakpoint,
        ) ??
        marginHorizontal ??
        margin;
    marginRight = doubleValueResolver(
          styleSheet.marginRight,
          marginRight,
          activeBreakpoint,
        ) ??
        marginHorizontal ??
        margin;

    // [padding]
    padding =
        doubleValueResolver(styleSheet.padding, padding, activeBreakpoint);
    paddingVertical = doubleValueResolver(
        styleSheet.paddingVertical, paddingVertical, activeBreakpoint);
    paddingHorizontal = doubleValueResolver(
        styleSheet.paddingHorizontal, paddingHorizontal, activeBreakpoint);

    paddingTop = doubleValueResolver(
          styleSheet.paddingTop,
          paddingTop,
          activeBreakpoint,
        ) ??
        paddingVertical ??
        padding;
    paddingBottom = doubleValueResolver(
          styleSheet.paddingBottom,
          paddingBottom,
          activeBreakpoint,
        ) ??
        paddingVertical ??
        padding as double;
    paddingLeft = doubleValueResolver(
          styleSheet.paddingLeft,
          paddingLeft,
          activeBreakpoint,
        ) ??
        paddingHorizontal ??
        padding;
    paddingRight = doubleValueResolver(
          styleSheet.paddingRight,
          paddingRight,
          activeBreakpoint,
        ) ??
        paddingHorizontal ??
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
    borderRadius = doubleValueResolver(
      styleSheet.borderRadius,
      borderRadius,
      activeBreakpoint,
    );

    borderRadiusTopLeft = doubleValueResolver(
          styleSheet.borderRadiusTopLeft,
          borderRadiusTopLeft,
          activeBreakpoint,
        ) ??
        borderRadius;

    borderRadiusTopRight = doubleValueResolver(
          styleSheet.borderRadiusTopRight,
          borderRadiusTopRight,
          activeBreakpoint,
        ) ??
        borderRadius;

    borderRadiusBottomLeft = doubleValueResolver(
          styleSheet.borderRadiusBottomLeft,
          borderRadiusBottomLeft,
          activeBreakpoint,
        ) ??
        borderRadius;

    borderRadiusBottomRight = doubleValueResolver(
          styleSheet.borderRadiusBottomRight,
          borderRadiusBottomRight,
          activeBreakpoint,
        ) ??
        borderRadius;

    // [boxShadow]
    boxShadowOffsetX = doubleValueResolver(
      styleSheet.boxShadowOffsetX,
      boxShadowOffsetX,
      activeBreakpoint,
    ) as double;
    boxShadowOffsetY = doubleValueResolver(
      styleSheet.boxShadowOffsetY,
      boxShadowOffsetY,
      activeBreakpoint,
    ) as double;
    boxShadowBlur = doubleValueResolver(
      styleSheet.boxShadowBlur,
      boxShadowBlur,
      activeBreakpoint,
    ) as double;
    boxShadowSpread = doubleValueResolver(
      styleSheet.boxShadowSpread,
      boxShadowSpread,
      activeBreakpoint,
    ) as double;
    boxShadowColor = colorResolver(resolveValueForBreakpoint(
            styleSheet.boxShadowColor, activeBreakpoint) ??
        boxShadowColor);

    // [position]
    position =
        resolveValueForBreakpoint(styleSheet.position, activeBreakpoint) ??
            position;

    top = doubleValueResolver(styleSheet.top, top, activeBreakpoint);
    right = doubleValueResolver(styleSheet.right, right, activeBreakpoint);
    bottom = doubleValueResolver(styleSheet.bottom, bottom, activeBreakpoint);
    left = doubleValueResolver(styleSheet.left, left, activeBreakpoint);
  }
}
