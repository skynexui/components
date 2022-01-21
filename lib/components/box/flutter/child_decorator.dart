import 'package:skynexui_components/components.dart';
import 'package:skynexui_components/components/box/flutter/box_base_styles.dart';

mainAxisResolver(String value) {
  // justify-content
  // mainAxisAlignment:  "center|start|end|spaceBetween|spaceAround|spaceEvenly" [MainAxisAlignment],
  if (value == 'center') return MainAxisAlignment.center;
  if (value == 'flex-start') return MainAxisAlignment.start;
  if (value == 'flex-end') return MainAxisAlignment.end;
  if (value == 'space-between') return MainAxisAlignment.spaceBetween;
  if (value == 'space-around') return MainAxisAlignment.spaceAround;
  if (value == 'space-evenly') return MainAxisAlignment.spaceEvenly;

  throw Exception('mainAxisAlignment: $value is not supported');
}

crossAxisResolver(String value) {
  // align-items
  // crossAxisAlignment: "stretch|start|end|center"                              [CrossAxisAlignment],
  if (value == 'stretch') return CrossAxisAlignment.stretch;
  if (value == 'flex-start') return CrossAxisAlignment.start;
  if (value == 'flex-end') return CrossAxisAlignment.end;
  if (value == 'center') return CrossAxisAlignment.center;

  throw Exception('crossAxisAlignment: $value is not supported');
}

class ChildDecorator extends StatelessWidget {
  final String? flexDirection; // row|column
  final String? position; // relative
  final List<Widget> children;
  final String crossAxisAlignment;
  final String mainAxisAlignment;
  final BoxBaseStyles styles;

  const ChildDecorator({
    Key? key,
    this.flexDirection,
    this.position,
    this.children = const [],
    required this.crossAxisAlignment,
    required this.mainAxisAlignment,
    required this.styles,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var mainAxis = mainAxisResolver(mainAxisAlignment);
    var crossAxis = crossAxisResolver(crossAxisAlignment);

    if (styles.overflowY == 'scroll') {
      return ListView(
        children: children,
      );
    }

    if (flexDirection == "row") {
      return Row(
        children: children,
        mainAxisAlignment: mainAxis,
        crossAxisAlignment: crossAxis,
        mainAxisSize: MainAxisSize.min,
      );
    }

    if (flexDirection == "column") {
      return Column(
        children: children,
        mainAxisAlignment: mainAxis,
        crossAxisAlignment: crossAxis,
        mainAxisSize: MainAxisSize.min,
      );
    }

    // ignore: todo
    // TODO: Apply this in future
    if (position == 'relative') {
      return Stack(
        children: children,
      );
    }

    if (children.length > 1) {
      throw Exception(
          'Only one child is supported, for more provide "flexDirection" prop with row|column');
    }

    var childValid = children[0];
    return childValid;
  }
}
