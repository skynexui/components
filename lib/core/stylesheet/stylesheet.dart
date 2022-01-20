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
// %%[CODER_END]:StyleSheet_attributes%%

  const StyleSheet({
// %%[CODER_START]:StyleSheet_constructor%%
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
// %%[CODER_END]:StyleSheet_constructor%%
  });
}
