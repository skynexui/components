import 'package:skynexui_components/components.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var theme = useTheme(context);
    var colorsPrimary = theme.colors.primary.toMap();
    var colorSelected = colorsPrimary['x500'] as String;
    var bg = colorSelected;
    return Scaffold(
      body: Box(
        styleSheet: StyleSheet(
          flexDirection: {
            Breakpoints.xs: 'column',
          },
          backgroundColor: {
            Breakpoints.xs: bg,
          },
          margin: {Breakpoints.xs: 50},
          paddingBottom: {Breakpoints.xs: 100},
          paddingVertical: {Breakpoints.xs: 50},
          paddingHorizontal: {Breakpoints.xs: 50},
        ),
        children: [
          Text(
            'SkynexUI: $colorSelected',
            styleSheet: StyleSheet(
              color: {
                Breakpoints.xs: theme.colors.neutral.x999,
                Breakpoints.sm: theme.colors.neutral.x000,
              },
            ),
          ),
          Text(
            'Second text',
            styleSheet: StyleSheet(
              color: {
                Breakpoints.xs: theme.colors.neutral.x999,
                Breakpoints.sm: theme.colors.neutral.x000,
              },
            ),
          ),
        ],
      ),
    );
  }
}
