import 'package:skynexui_components/components.dart';
import 'package:flutter/material.dart' as flutter;

class Text extends StatelessWidget {
  final StyleSheet styleSheet;

  final String data;

  const Text(
    this.data, {
    Key? key,
    this.styleSheet = const StyleSheet(),
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Box(
      styleSheet: styleSheet,
      children: [
        flutter.Text(
          data,
        ),
      ],
    );
  }
}
