import 'package:skynexui_components/components.dart';
import 'package:skynexui_components/components/box/flutter/box_base_styles.dart';
import 'package:skynexui_components/components/box/flutter/child_decorator.dart';

class Box extends StatelessWidget {
  final List<Widget>? children;
  final StyleSheet styleSheet;
  final BoxBaseStyles? externalStyles;

  const Box({
    Key? key,
    this.children = const [],
    this.styleSheet = const StyleSheet(),
    this.externalStyles,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var activeBreakpoint = getActiveBreakpoint(context);
    BoxBaseStyles styles = BoxBaseStyles(
      activeBreakpoint: activeBreakpoint,
      styleSheet: styleSheet,
    );
    if (externalStyles != null) {
      styles = externalStyles as BoxBaseStyles;
    }

    return DefaultTextStyle.merge(
      style: TextStyle(
        color: styles.color,
      ),
      child: withFlexible(
        styles: styles,
        child: mainWidget(styles),
      ),
    );
  }

  Widget withFlexible({required Widget child, required styles}) {
    if (styles.flex != null) {
      return Expanded(
        flex: styles.flex,
        child: child,
      );
    }
    return child;
  }

  Container mainWidget(BoxBaseStyles styles) {
    return Container(
      width: styles.width,
      height: styles.height,
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
        borderRadius: BorderRadius.only(
          topLeft: Radius.circular(styles.borderRadiusTopLeft),
          topRight: Radius.circular(styles.borderRadiusTopRight),
          bottomLeft: Radius.circular(styles.borderRadiusBottomLeft),
          bottomRight: Radius.circular(styles.borderRadiusBottomRight),
        ),
      ),
      child: children!.isNotEmpty
          ? ChildDecorator(
              styles: styles,
              flexDirection: styles.flexDirection,
              position: styles.position,
              crossAxisAlignment: styles.crossAxisAlignment,
              mainAxisAlignment: styles.mainAxisAlignment,
              children: children as List<Widget>,
            )
          : null,
    );
  }
}
