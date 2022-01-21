import 'package:skynexui_components/components.dart';
import 'package:skynexui_components/components/box/flutter/box_base_styles.dart';

class FlatList<DataList> extends StatelessWidget {
  final List<DataList> data;
  final StyleSheet styleSheet;
  final Map<Breakpoints, int> crossAxisCount;
  final Widget Function(BuildContext, int) itemBuilder;

  BoxBaseStyles _boxStyles(
    StyleSheet styleSheet,
    Breakpoints activeBreakpoint,
  ) {
    var boxStyles = BoxBaseStyles(
      activeBreakpoint: activeBreakpoint,
      styleSheet: styleSheet,
    );
    boxStyles.padding = 0;
    boxStyles.paddingLeft = 0;
    boxStyles.paddingRight = 0;
    boxStyles.paddingTop = 0;
    boxStyles.paddingBottom = 0;

    return boxStyles;
  }

  const FlatList({
    Key? key,
    required this.data,
    required this.itemBuilder,
    this.crossAxisCount = const {
      Breakpoints.xs: 1,
    },
    this.styleSheet = const StyleSheet(),
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var activeBreakpoint = getActiveBreakpoint(context);
    var styles = BoxBaseStyles(
      activeBreakpoint: activeBreakpoint,
      styleSheet: styleSheet,
    );

    return Box(
      externalStyles: _boxStyles(styleSheet, activeBreakpoint),
      children: [
        GridView.builder(
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount:
                resolveValueForBreakpoint(crossAxisCount, activeBreakpoint),
            crossAxisSpacing: 5,
            mainAxisSpacing: 5,
          ),
          padding: EdgeInsets.only(
            left: styles.paddingLeft,
            right: styles.paddingRight,
            top: styles.paddingTop,
            bottom: styles.paddingBottom,
          ),
          itemCount: data.length,
          itemBuilder: itemBuilder,
        ),
      ],
    );
  }
}
