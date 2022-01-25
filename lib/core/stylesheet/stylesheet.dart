import 'package:skynexui_components/core/breakpoints/breakpoints.dart';

const Map<Breakpoints, String?> defaultStringEmptyValue = {
  Breakpoints.xs: null,
};

const Map<Breakpoints, String> defaultStringZeroValue = {
  Breakpoints.xs: '0',
};

const Map<Breakpoints, String?> defaultStringColorEmptyValue = {
  Breakpoints.xs: null,
};

const Map<Breakpoints, int?> defaultIntEmptyValue = {
  Breakpoints.xs: null,
};

const Map<Breakpoints, double> defaultDoubleZeroValue = {
  Breakpoints.xs: 0,
};

const Map<Breakpoints, double?> defaultDoubleEmptyValue = {
  Breakpoints.xs: null,
};

class StyleSheet {
// %%[CODER_START]:StyleSheet_attributes%%
  final Map<Breakpoints, String?> bottom;
  final Map<Breakpoints, String?> left;
  final Map<Breakpoints, String?> right;
  final Map<Breakpoints, String?> top;
  final Map<Breakpoints, String?> position;
  final Map<Breakpoints, String?> boxShadowColor;
  final Map<Breakpoints, String?> boxShadowSpread;
  final Map<Breakpoints, String?> boxShadowBlur;
  final Map<Breakpoints, String?> boxShadowOffsetY;
  final Map<Breakpoints, String?> boxShadowOffsetX;
  final Map<Breakpoints, String?> borderRadiusBottomRight;
  final Map<Breakpoints, String?> borderRadiusBottomLeft;
  final Map<Breakpoints, String?> borderRadiusTopRight;
  final Map<Breakpoints, String?> borderRadiusTopLeft;
  final Map<Breakpoints, String?> borderRadius;
  final Map<Breakpoints, String?> overflowY;
  final Map<Breakpoints, int?> flex;
  final Map<Breakpoints, String?> alignItems;
  final Map<Breakpoints, String?> crossAxisAlignment;
  final Map<Breakpoints, String?> justifyContent;
  final Map<Breakpoints, String?> mainAxisAlignment;
  final Map<Breakpoints, String?> flexDirection;
  final Map<Breakpoints, String?> marginHorizontal;
  final Map<Breakpoints, String?> marginVertical;
  final Map<Breakpoints, String?> marginBottom;
  final Map<Breakpoints, String?> marginRight;
  final Map<Breakpoints, String?> marginLeft;
  final Map<Breakpoints, String?> marginTop;
  final Map<Breakpoints, String> margin;
  final Map<Breakpoints, String?> paddingHorizontal;
  final Map<Breakpoints, String?> paddingVertical;
  final Map<Breakpoints, String?> paddingBottom;
  final Map<Breakpoints, String?> paddingRight;
  final Map<Breakpoints, String?> paddingLeft;
  final Map<Breakpoints, String?> paddingTop;
  final Map<Breakpoints, String> padding;
  final Map<Breakpoints, String?> backgroundColor;
  final Map<Breakpoints, String?> color;
  final Map<Breakpoints, String?> height;
  final Map<Breakpoints, String?> width; 
// %%[CODER_END]:StyleSheet_attributes%%

  const StyleSheet({
// %%[CODER_START]:StyleSheet_constructor%%
    this.bottom = defaultStringEmptyValue,
    this.left = defaultStringEmptyValue,
    this.right = defaultStringEmptyValue,
    this.top = defaultStringEmptyValue,
    this.position = defaultStringEmptyValue,
    this.boxShadowColor = defaultStringEmptyValue,
    this.boxShadowSpread = defaultStringEmptyValue,
    this.boxShadowBlur = defaultStringEmptyValue,
    this.boxShadowOffsetY = defaultStringEmptyValue,
    this.boxShadowOffsetX = defaultStringEmptyValue,
    this.borderRadiusBottomRight = defaultStringEmptyValue,
    this.borderRadiusBottomLeft = defaultStringEmptyValue,
    this.borderRadiusTopRight = defaultStringEmptyValue,
    this.borderRadiusTopLeft = defaultStringEmptyValue,
    this.borderRadius = defaultStringEmptyValue,
    this.overflowY = defaultStringEmptyValue,
    this.flex = defaultIntEmptyValue,
    this.alignItems = defaultStringEmptyValue,
    this.crossAxisAlignment = defaultStringEmptyValue,
    this.justifyContent = defaultStringEmptyValue,
    this.mainAxisAlignment = defaultStringEmptyValue,
    this.flexDirection = defaultStringEmptyValue,
    this.marginHorizontal = defaultStringEmptyValue,
    this.marginVertical = defaultStringEmptyValue,
    this.marginBottom = defaultStringEmptyValue,
    this.marginRight = defaultStringEmptyValue,
    this.marginLeft = defaultStringEmptyValue,
    this.marginTop = defaultStringEmptyValue,
    this.margin = defaultStringZeroValue,
    this.paddingHorizontal = defaultStringEmptyValue,
    this.paddingVertical = defaultStringEmptyValue,
    this.paddingBottom = defaultStringEmptyValue,
    this.paddingRight = defaultStringEmptyValue,
    this.paddingLeft = defaultStringEmptyValue,
    this.paddingTop = defaultStringEmptyValue,
    this.padding = defaultStringZeroValue,
    this.backgroundColor = defaultStringEmptyValue,
    this.color = defaultStringEmptyValue,
    this.height = defaultStringEmptyValue,
    this.width = defaultStringEmptyValue, 
// %%[CODER_END]:StyleSheet_constructor%%
  });
}
