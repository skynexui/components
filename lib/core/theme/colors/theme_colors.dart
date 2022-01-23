import 'package:skynexui_components/core/theme/theme.dart';
import 'package:skynexui_components/core/theme/colors/theme_color_set.dart';

ThemeColorSet primaryDefault = ThemeColorSet(
  x050: skynexUIBaseTheme["colors"]!["primary"]!["x050"] as String,
  x100: skynexUIBaseTheme["colors"]!["primary"]!["x100"] as String,
  x200: skynexUIBaseTheme["colors"]!["primary"]!["x200"] as String,
  x300: skynexUIBaseTheme["colors"]!["primary"]!["x300"] as String,
  x400: skynexUIBaseTheme["colors"]!["primary"]!["x400"] as String,
  x500: skynexUIBaseTheme["colors"]!["primary"]!["x500"] as String,
  x600: skynexUIBaseTheme["colors"]!["primary"]!["x600"] as String,
  x700: skynexUIBaseTheme["colors"]!["primary"]!["x700"] as String,
  x800: skynexUIBaseTheme["colors"]!["primary"]!["x800"] as String,
  x900: skynexUIBaseTheme["colors"]!["primary"]!["x900"] as String,
);

ThemeColorSet accentDefault = ThemeColorSet(
  x050: skynexUIBaseTheme["colors"]!["accent"]!["x050"] as String,
  x100: skynexUIBaseTheme["colors"]!["accent"]!["x100"] as String,
  x200: skynexUIBaseTheme["colors"]!["accent"]!["x200"] as String,
  x300: skynexUIBaseTheme["colors"]!["accent"]!["x300"] as String,
  x400: skynexUIBaseTheme["colors"]!["accent"]!["x400"] as String,
  x500: skynexUIBaseTheme["colors"]!["accent"]!["x500"] as String,
  x600: skynexUIBaseTheme["colors"]!["accent"]!["x600"] as String,
  x700: skynexUIBaseTheme["colors"]!["accent"]!["x700"] as String,
  x800: skynexUIBaseTheme["colors"]!["accent"]!["x800"] as String,
  x900: skynexUIBaseTheme["colors"]!["accent"]!["x900"] as String,
);

ThemeColorSet neutralDefault = ThemeColorSet(
  x000: skynexUIBaseTheme["colors"]!["neutral"]!["x000"] as String,
  x050: skynexUIBaseTheme["colors"]!["neutral"]!["x050"] as String,
  x100: skynexUIBaseTheme["colors"]!["neutral"]!["x100"] as String,
  x200: skynexUIBaseTheme["colors"]!["neutral"]!["x200"] as String,
  x300: skynexUIBaseTheme["colors"]!["neutral"]!["x300"] as String,
  x400: skynexUIBaseTheme["colors"]!["neutral"]!["x400"] as String,
  x500: skynexUIBaseTheme["colors"]!["neutral"]!["x500"] as String,
  x600: skynexUIBaseTheme["colors"]!["neutral"]!["x600"] as String,
  x700: skynexUIBaseTheme["colors"]!["neutral"]!["x700"] as String,
  x800: skynexUIBaseTheme["colors"]!["neutral"]!["x800"] as String,
  x900: skynexUIBaseTheme["colors"]!["neutral"]!["x900"] as String,
  x999: skynexUIBaseTheme["colors"]!["neutral"]!["x999"] as String,
);

ThemeColorSet positiveDefault = ThemeColorSet(
  x050: skynexUIBaseTheme["colors"]!["positive"]!["x050"] as String,
  x100: skynexUIBaseTheme["colors"]!["positive"]!["x100"] as String,
  x200: skynexUIBaseTheme["colors"]!["positive"]!["x200"] as String,
  x300: skynexUIBaseTheme["colors"]!["positive"]!["x300"] as String,
  x400: skynexUIBaseTheme["colors"]!["positive"]!["x400"] as String,
  x500: skynexUIBaseTheme["colors"]!["positive"]!["x500"] as String,
  x600: skynexUIBaseTheme["colors"]!["positive"]!["x600"] as String,
  x700: skynexUIBaseTheme["colors"]!["positive"]!["x700"] as String,
  x800: skynexUIBaseTheme["colors"]!["positive"]!["x800"] as String,
  x900: skynexUIBaseTheme["colors"]!["positive"]!["x900"] as String,
);

ThemeColorSet negativeDefault = ThemeColorSet(
  x050: skynexUIBaseTheme["colors"]!["negative"]!["x050"] as String,
  x100: skynexUIBaseTheme["colors"]!["negative"]!["x100"] as String,
  x200: skynexUIBaseTheme["colors"]!["negative"]!["x200"] as String,
  x300: skynexUIBaseTheme["colors"]!["negative"]!["x300"] as String,
  x400: skynexUIBaseTheme["colors"]!["negative"]!["x400"] as String,
  x500: skynexUIBaseTheme["colors"]!["negative"]!["x500"] as String,
  x600: skynexUIBaseTheme["colors"]!["negative"]!["x600"] as String,
  x700: skynexUIBaseTheme["colors"]!["negative"]!["x700"] as String,
  x800: skynexUIBaseTheme["colors"]!["negative"]!["x800"] as String,
  x900: skynexUIBaseTheme["colors"]!["negative"]!["x900"] as String,
);

ThemeColorSet warningDefault = ThemeColorSet(
  x050: skynexUIBaseTheme["colors"]!["warning"]!["x050"] as String,
  x100: skynexUIBaseTheme["colors"]!["warning"]!["x100"] as String,
  x200: skynexUIBaseTheme["colors"]!["warning"]!["x200"] as String,
  x300: skynexUIBaseTheme["colors"]!["warning"]!["x300"] as String,
  x400: skynexUIBaseTheme["colors"]!["warning"]!["x400"] as String,
  x500: skynexUIBaseTheme["colors"]!["warning"]!["x500"] as String,
  x600: skynexUIBaseTheme["colors"]!["warning"]!["x600"] as String,
  x700: skynexUIBaseTheme["colors"]!["warning"]!["x700"] as String,
  x800: skynexUIBaseTheme["colors"]!["warning"]!["x800"] as String,
  x900: skynexUIBaseTheme["colors"]!["warning"]!["x900"] as String,
);

class ThemeColors {
  ThemeColorSet primary = primaryDefault;
  ThemeColorSet accent = accentDefault;
  ThemeColorSet neutral = neutralDefault;
  ThemeColorSet positive = positiveDefault;
  ThemeColorSet negative = negativeDefault;
  ThemeColorSet warning = warningDefault;

  ThemeColors({primary, accent, neutral, positive, negative, warning}) {
    if (primary != null) this.primary = primary;
    if (accent != null) this.accent = accent;
    if (neutral != null) this.neutral = neutral;
    if (positive != null) this.positive = positive;
    if (negative != null) this.negative = negative;
    if (warning != null) this.warning = warning;
  }
}
