import 'package:skynexui_components/components.dart';
import 'package:skynexui_components/components/box/flutter/box_base_styles.dart';

class Box extends StatelessWidget {
  final List<Widget>? children;
  final StyleSheet styleSheet;

  const Box({
    Key? key,
    required this.children,
    this.styleSheet = const StyleSheet(),
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    const activeBreakpoint = Breakpoints.xs;
    var styles = BoxBaseStyles(
      activeBreakpoint: activeBreakpoint,
      styleSheet: styleSheet,
    );

    var child = children![0];
    return Container(
      margin: EdgeInsets.only(
        bottom: styles.margin,
        left: styles.margin,
        right: styles.margin,
        top: styles.margin,
      ),
      padding: EdgeInsets.only(
        bottom: styles.padding,
        left: styles.padding,
        right: styles.padding,
        top: styles.padding,
      ),
      decoration: BoxDecoration(
        color: styles.backgroundColor,
      ),
      child: child,
    );
  }
}
