import 'package:skynexui_components/components.dart';
import 'package:flutter/material.dart' as flutter;
import 'package:skynexui_components/components/box/flutter/box_base_styles.dart';

class Text extends StatelessWidget {
  final StyleSheet styleSheet;
  final String variant;
  final String data;

  const Text(
    this.data, {
    Key? key,
    this.variant = 'body2',
    this.styleSheet = const StyleSheet(),
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var theme = useTheme(context);
    var activeVariant = theme.typography.toMap()[variant];

    var activeBreakpoint = getActiveBreakpoint(context);
    var styles = BoxBaseStyles(
      styleSheet: StyleSheet(
        color: styleSheet.color,
        fontSize: {
          Breakpoints.xs: activeVariant[Breakpoints.xs]?.fontSize,
          Breakpoints.md: activeVariant[Breakpoints.md]?.fontSize,
        },
        fontWeight: {
          Breakpoints.xs: activeVariant[Breakpoints.xs]?.fontWeight,
          Breakpoints.md: activeVariant[Breakpoints.md]?.fontWeight,
        },
        letterSpacing: {
          Breakpoints.xs: activeVariant[Breakpoints.xs]?.letterSpacing,
          Breakpoints.md: activeVariant[Breakpoints.md]?.letterSpacing,
        },
      ),
      activeBreakpoint: activeBreakpoint,
    );

    return Box(
      styleSheet: styleSheet,
      children: [
        flutter.Text(
          data,
          style: TextStyle(
            fontSize: styles.fontSize,
            fontWeight: styles.fontWeight,
            color: styles.color,
          ),
        ),
      ],
    );
  }
}
