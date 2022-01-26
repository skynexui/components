import 'package:skynexui_components/components.dart';
import 'package:skynexui_components/components/box/flutter/box_base_styles.dart';

class GridDisplay<DataItem> extends StatelessWidget {
  final List<DataItem> data;
  final StyleSheet styleSheet;
  final Map<Breakpoints, int> crossAxisCount;
  final Map<Breakpoints, double> crossAxisSpacing;
  final Map<Breakpoints, double> mainAxisSpacing;
  final Widget Function(BuildContext, int, DataItem) itemBuilder;

  BoxBaseStyles _boxStyles(
    StyleSheet styleSheet,
    Breakpoints activeBreakpoint,
  ) {
    var boxStyles = BoxBaseStyles(
      activeBreakpoint: activeBreakpoint,
      styleSheet: styleSheet,
    );
    boxStyles.flex = 1;
    boxStyles.padding = 0;
    boxStyles.paddingLeft = 0;
    boxStyles.paddingRight = 0;
    boxStyles.paddingTop = 0;
    boxStyles.paddingBottom = 0;

    return boxStyles;
  }

  const GridDisplay({
    Key? key,
    required this.data,
    required this.itemBuilder,
    this.crossAxisCount = const {
      Breakpoints.xs: 1,
    },
    this.crossAxisSpacing = const {
      Breakpoints.xs: 1,
    },
    this.mainAxisSpacing = const {
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
    var _crossAxisCount = resolveValueForBreakpoint(
      crossAxisCount,
      activeBreakpoint,
    );
    var _crossAxisSpacing = resolveValueForBreakpoint(
      crossAxisSpacing,
      activeBreakpoint,
    );
    var _mainAxisSpacing = resolveValueForBreakpoint(
      mainAxisSpacing,
      activeBreakpoint,
    );

    return Box(
      externalStyles: _boxStyles(styleSheet, activeBreakpoint),
      children: [
        GridView.builder(
          shrinkWrap: true,
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: _crossAxisCount,
            crossAxisSpacing: _crossAxisSpacing,
            mainAxisSpacing: _mainAxisSpacing,
          ),
          padding: EdgeInsets.only(
            left: styles.paddingLeft,
            right: styles.paddingRight,
            top: styles.paddingTop,
            bottom: styles.paddingBottom,
          ),
          itemCount: data.length,
          itemBuilder: (context, index) {
            return itemBuilder(context, index, data[index]);
          },
        ),
      ],
    );
  }
}
