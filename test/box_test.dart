// This is a basic Flutter widget test.
//
// To perform an interaction with a widget in your test, use the WidgetTester
// utility that Flutter provides. For example, you can send tap and scroll
// gestures. You can also use WidgetTester to find child widgets in the widget
// tree, read text, and verify that the values of widget properties are correct.

import 'package:flutter_test/flutter_test.dart';
import 'package:skynexui_components/components.dart';

Widget withProvider(Widget widget) {
  return MultiProvider(
    providers: [
      ChangeNotifierProvider(create: (_) => SkynexUIProvider()),
    ],
    child: MediaQuery(
      data: const MediaQueryData(),
      child: MaterialApp(home: widget),
    ),
  );
}

void main() {
  group('Box', () {
    testWidgets('renders box component', (WidgetTester tester) async {
      Widget boxWidget = withProvider(
        const Box(),
      );

      await tester.pumpWidget(boxWidget);

      var boxFinder = find.byWidget(boxWidget);

      expect(boxFinder, findsOneWidget);
    });
    group('padding', () {
      testWidgets('renders with padding', (WidgetTester tester) async {
        Widget boxWidget = withProvider(
          const Box(
            styleSheet: StyleSheet(
              paddingBottom: {Breakpoints.xs: '10px'},
            ),
          ),
        );

        await tester.pumpWidget(boxWidget);

        var boxFinder = find.byWidget(boxWidget);

        expect(boxFinder, findsOneWidget);
      });
    });
  });
}
