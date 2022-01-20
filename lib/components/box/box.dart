import 'package:skynexui_components/components.dart';
import 'package:skynexui_components/components/box/flutter/box_base_styles.dart';
import 'package:skynexui_components/components/box/flutter/child_decorator.dart';

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
    var activeBreakpoint = getActiveBreakpoint(context);
    var styles = BoxBaseStyles(
      activeBreakpoint: activeBreakpoint,
      styleSheet: styleSheet,
    );

    return DefaultTextStyle.merge(
      style: TextStyle(
        color: styles.color,
      ),
      child: Container(
        margin: EdgeInsets.only(
          bottom: styles.marginBottom,
          left: styles.marginLeft,
          right: styles.marginRight,
          top: styles.marginTop,
        ),
        padding: EdgeInsets.only(
          bottom: styles.paddingBottom,
          left: styles.paddingLeft,
          right: styles.paddingRight,
          top: styles.paddingTop,
        ),
        decoration: BoxDecoration(
          color: styles.backgroundColor,
        ),
        child: ChildDecorator(
          flexDirection: styles.flexDirection,
          position: styles.position,
          crossAxisAlignment: styles.crossAxisAlignment,
          mainAxisAlignment: styles.mainAxisAlignment,
          children: children as List<Widget>,
        ),
      ),
    );
  }
}
