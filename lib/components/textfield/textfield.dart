import 'package:skynexui_components/components.dart';
import 'package:flutter/material.dart' as flutter;

class TextField extends StatelessWidget {
  final StyleSheet styleSheet;

  final String data;

  const TextField(
    this.data, {
    Key? key,
    this.styleSheet = const StyleSheet(),
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Box(
      children: [
        flutter.Text(
          data,
        ),
      ],
    );
  }
}
