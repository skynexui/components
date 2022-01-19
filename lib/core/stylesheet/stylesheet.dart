import 'package:skynexui_components/core/breakpoints/breakpoints.dart';

const Map<Breakpoints, String?> defaultStringEmptyValue = {
  Breakpoints.xs: null,
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
  final Map<Breakpoints,double?> marginBottom;
  final Map<Breakpoints,double?> marginRight;
  final Map<Breakpoints,double?> marginLeft;
  final Map<Breakpoints,double?> marginTop;
  final Map<Breakpoints,double> margin;
  final Map<Breakpoints,double?> paddingBottom;
  final Map<Breakpoints,double?> paddingRight;
  final Map<Breakpoints,double?> paddingLeft;
  final Map<Breakpoints,double?> paddingTop;
  final Map<Breakpoints,double> padding;
  final Map<Breakpoints,String?> backgroundColor; 
// %%[CODER_END]:StyleSheet_attributes%%

  // final double? width;
  // final double? height;
  // final Map<Breakpoints, Color> color;
  // final Map<Breakpoints, double?> paddingVertical;
  // final Map<Breakpoints, double?> paddingHorizontal;
  // final Map<Breakpoints, double?> marginVertical;
  // final Map<Breakpoints, double?> marginHorizontal;
  // final Map<Breakpoints, double> borderRadius;
  // final Map<Breakpoints, double?> borderRadiusBottomLeft;
  // final Map<Breakpoints, double?> borderRadiusBottomRight;
  // final Map<Breakpoints, String?> as;
  // final Map<Breakpoints, String?> position;
  // final Map<Breakpoints, double?> top;
  // final Map<Breakpoints, double?> right;
  // final Map<Breakpoints, double?> bottom;
  // final Map<Breakpoints, double?> left;
  // final Map<Breakpoints, int?> flex;
  // // mainAxisAlignment:  "center|start|end|spaceBetween|spaceAround|spaceEvenly" [MainAxisAlignment],
  // final Map<Breakpoints, String> mainAxisAlignment;
  // // crossAxisAlignment: "stretch|start|end|center"                              [CrossAxisAlignment],
  // final Map<Breakpoints, String> crossAxisAlignment;

  // ===============

  const StyleSheet({
// %%[CODER_START]:StyleSheet_constructor%%
    this.marginBottom = defaultDoubleEmptyValue,
    this.marginRight = defaultDoubleEmptyValue,
    this.marginLeft = defaultDoubleEmptyValue,
    this.marginTop = defaultDoubleEmptyValue,
    this.margin = defaultDoubleZeroValue,
    this.paddingBottom = defaultDoubleEmptyValue,
    this.paddingRight = defaultDoubleEmptyValue,
    this.paddingLeft = defaultDoubleEmptyValue,
    this.paddingTop = defaultDoubleEmptyValue,
    this.padding = defaultDoubleZeroValue,
    this.backgroundColor = defaultStringEmptyValue, 
// %%[CODER_END]:StyleSheet_constructor%%
    // this.width,
    // this.height,
    // this.color = const {
    //   Breakpoints.xs: Colors.black,
    // },
    // this.paddingVertical = defaultDoubleEmptyValue,
    // this.paddingHorizontal = defaultDoubleEmptyValue,
    // this.marginVertical = defaultDoubleEmptyValue,
    // this.marginHorizontal = defaultDoubleEmptyValue,
    // this.borderRadius = defaultDoubleZeroValue,
    // this.borderRadiusBottomLeft = defaultDoubleEmptyValue,
    // this.borderRadiusBottomRight = defaultDoubleEmptyValue,
    // this.position = defaultStringEmptyValue,
    // this.top = defaultDoubleEmptyValue,
    // this.right = defaultDoubleEmptyValue,
    // this.bottom = defaultDoubleEmptyValue,
    // this.left = defaultDoubleEmptyValue,
    // this.as = defaultStringEmptyValue,
    // this.flex = defaultIntEmptyValue,
    // this.mainAxisAlignment = const {
    //   Breakpoints.xs: 'start',
    // },
    // this.crossAxisAlignment = const {
    //   Breakpoints.xs: 'start',
    // },
  });
}
