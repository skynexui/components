import 'package:skynexui_components/components.dart';

mainAxisResolver(String value) {
  // justify-content
  // mainAxisAlignment:  "center|start|end|spaceBetween|spaceAround|spaceEvenly" [MainAxisAlignment],
  if (value == 'center') return MainAxisAlignment.center;
  if (value == 'flex-start') return MainAxisAlignment.start;
  if (value == 'flex-end') return MainAxisAlignment.end;
  if (value == 'spaceBetween') return MainAxisAlignment.spaceBetween;
  if (value == 'spaceAround') return MainAxisAlignment.spaceAround;
  if (value == 'spaceEvenly') return MainAxisAlignment.spaceEvenly;

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

  const ChildDecorator({
    Key? key,
    this.flexDirection,
    this.position,
    this.children = const [],
    required this.crossAxisAlignment,
    required this.mainAxisAlignment,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var mainAxis = mainAxisResolver(mainAxisAlignment);
    var crossAxis = crossAxisResolver(crossAxisAlignment);

    if (flexDirection == "row") {
      return Row(
        children: children,
        mainAxisAlignment: mainAxis,
        crossAxisAlignment: crossAxis,
      );
    }

    if (flexDirection == "column") {
      return Column(
        children: children,
        mainAxisAlignment: mainAxis,
        crossAxisAlignment: crossAxis,
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
