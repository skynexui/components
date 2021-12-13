import 'package:components/components.dart';

extension HexColor on Color {
  /// String is in the format "aabbcc" or "ffaabbcc" with an optional leading "#".
  static Color fromHex(String hexString) {
    final buffer = StringBuffer();
    if (hexString.length == 6 || hexString.length == 7) buffer.write('ff');
    buffer.write(hexString.replaceFirst('#', ''));
    return Color(int.parse(buffer.toString(), radix: 16));
  }

  /// Prefixes a hash sign if [leadingHashSign] is set to `true` (default is `true`).
  String toHex({bool leadingHashSign = true}) => '${leadingHashSign ? '#' : ''}'
      '${alpha.toRadixString(16).padLeft(2, '0')}'
      '${red.toRadixString(16).padLeft(2, '0')}'
      '${green.toRadixString(16).padLeft(2, '0')}'
      '${blue.toRadixString(16).padLeft(2, '0')}';
}

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
    var padding =
        resolveValueForBreakpoint(styleSheet.padding, activeBreakpoint);
    var margin = resolveValueForBreakpoint(styleSheet.margin, activeBreakpoint);

    var backgroundColorValue =
        resolveValueForBreakpoint(styleSheet.backgroundColor, activeBreakpoint);
    var backgroundColor = (backgroundColorValue != null)
        ? HexColor.fromHex(backgroundColorValue)
        : Colors.transparent;

    var child = children![0];
    return Container(
      margin: EdgeInsets.only(
        bottom: margin,
        left: margin,
        right: margin,
        top: margin,
      ),
      padding: EdgeInsets.only(
        bottom: padding,
        left: padding,
        right: padding,
        top: padding,
      ),
      decoration: BoxDecoration(
        color: backgroundColor,
      ),
      child: child,
    );
  }
}
