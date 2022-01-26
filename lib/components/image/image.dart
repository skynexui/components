import 'package:skynexui_components/components.dart';
import 'package:flutter/material.dart' as flutter;

class Image extends StatelessWidget {
  final StyleSheet styleSheet;

  final String src;

  const Image({
    Key? key,
    required this.src,
    this.styleSheet = const StyleSheet(),
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Box(
      children: [
        flutter.Image.network(
          src,
          fit: BoxFit.contain,
          height: 100.0,
          width: 100.0,
        ),
      ],
    );
  }
}
