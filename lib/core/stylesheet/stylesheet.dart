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
  final Map<Breakpoints, String?> maxHeight;
  final Map<Breakpoints, String?> minHeight;
  final Map<Breakpoints, String?> backgroundBlendMode;
  final Map<Breakpoints, String?> backgroundSize;
  final Map<Breakpoints, String?> backgroundRepeat;
  final Map<Breakpoints, String?> backgroundImage;
  final Map<Breakpoints, String?> bottom;
  final Map<Breakpoints, String?> left;
  final Map<Breakpoints, String?> right;
  final Map<Breakpoints, String?> top;
  final Map<Breakpoints, String?> position;
  final Map<Breakpoints, String?> boxShadowColor;
  final Map<Breakpoints, double?> boxShadowSpread;
  final Map<Breakpoints, double?> boxShadowBlur;
  final Map<Breakpoints, double?> boxShadowOffsetY;
  final Map<Breakpoints, double?> boxShadowOffsetX;
  final Map<Breakpoints, String?> borderRadiusBottomRight;
  final Map<Breakpoints, String?> borderRadiusBottomLeft;
  final Map<Breakpoints, String?> borderRadiusTopRight;
  final Map<Breakpoints, String?> borderRadiusTopLeft;
  final Map<Breakpoints, String?> borderRadius;
  final Map<Breakpoints, String?> overflowY;
  final Map<Breakpoints, double?> flex;
  final Map<Breakpoints, String?> alignItems;
  final Map<Breakpoints, String?> crossAxisAlignment;
  final Map<Breakpoints, String?> justifyContent;
  final Map<Breakpoints, String?> mainAxisAlignment;
  final Map<Breakpoints, String?> flexDirection;
  final Map<Breakpoints, double?> marginHorizontal;
  final Map<Breakpoints, double?> marginVertical;
  final Map<Breakpoints, double?> marginBottom;
  final Map<Breakpoints, double?> marginRight;
  final Map<Breakpoints, double?> marginLeft;
  final Map<Breakpoints, double?> marginTop;
  final Map<Breakpoints, double> margin;
  final Map<Breakpoints, double?> paddingHorizontal;
  final Map<Breakpoints, double?> paddingVertical;
  final Map<Breakpoints, double?> paddingBottom;
  final Map<Breakpoints, double?> paddingRight;
  final Map<Breakpoints, double?> paddingLeft;
  final Map<Breakpoints, double?> paddingTop;
  final Map<Breakpoints, double> padding;
  final Map<Breakpoints, String?> backgroundColor;
  final Map<Breakpoints, String?> color;
  final Map<Breakpoints, String?> height;
  final Map<Breakpoints, String?> width; 
// %%[CODER_END]:StyleSheet_attributes%%

  const StyleSheet({
// %%[CODER_START]:StyleSheet_constructor%%
    this.maxHeight = defaultStringEmptyValue,
    this.minHeight = defaultStringEmptyValue,
    this.backgroundBlendMode = defaultStringEmptyValue,
    this.backgroundSize = defaultStringEmptyValue,
    this.backgroundRepeat = defaultStringEmptyValue,
    this.backgroundImage = defaultStringEmptyValue,
    this.bottom = defaultStringEmptyValue,
    this.left = defaultStringEmptyValue,
    this.right = defaultStringEmptyValue,
    this.top = defaultStringEmptyValue,
    this.position = defaultStringEmptyValue,
    this.boxShadowColor = defaultStringEmptyValue,
    this.boxShadowSpread = defaultDoubleEmptyValue,
    this.boxShadowBlur = defaultDoubleEmptyValue,
    this.boxShadowOffsetY = defaultDoubleEmptyValue,
    this.boxShadowOffsetX = defaultDoubleEmptyValue,
    this.borderRadiusBottomRight = defaultStringEmptyValue,
    this.borderRadiusBottomLeft = defaultStringEmptyValue,
    this.borderRadiusTopRight = defaultStringEmptyValue,
    this.borderRadiusTopLeft = defaultStringEmptyValue,
    this.borderRadius = defaultStringEmptyValue,
    this.overflowY = defaultStringEmptyValue,
    this.flex = defaultDoubleEmptyValue,
    this.alignItems = defaultStringEmptyValue,
    this.crossAxisAlignment = defaultStringEmptyValue,
    this.justifyContent = defaultStringEmptyValue,
    this.mainAxisAlignment = defaultStringEmptyValue,
    this.flexDirection = defaultStringEmptyValue,
    this.marginHorizontal = defaultDoubleEmptyValue,
    this.marginVertical = defaultDoubleEmptyValue,
    this.marginBottom = defaultDoubleEmptyValue,
    this.marginRight = defaultDoubleEmptyValue,
    this.marginLeft = defaultDoubleEmptyValue,
    this.marginTop = defaultDoubleEmptyValue,
    this.margin = defaultDoubleZeroValue,
    this.paddingHorizontal = defaultDoubleEmptyValue,
    this.paddingVertical = defaultDoubleEmptyValue,
    this.paddingBottom = defaultDoubleEmptyValue,
    this.paddingRight = defaultDoubleEmptyValue,
    this.paddingLeft = defaultDoubleEmptyValue,
    this.paddingTop = defaultDoubleEmptyValue,
    this.padding = defaultDoubleZeroValue,
    this.backgroundColor = defaultStringEmptyValue,
    this.color = defaultStringEmptyValue,
    this.height = defaultStringEmptyValue,
    this.width = defaultStringEmptyValue, 
// %%[CODER_END]:StyleSheet_constructor%%
  });
}
