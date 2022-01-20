import 'package:skynexui_components/components.dart';
import 'package:flutter/material.dart' as flutter;

class FlatList extends StatelessWidget {
  final StyleSheet styleSheet;

  const FlatList({
    Key? key,
    this.styleSheet = const StyleSheet(),
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Box(
      styleSheet: styleSheet,
      children: const [
        flutter.Text(
          'Flat List',
        ),
      ],
    );
  }
}
