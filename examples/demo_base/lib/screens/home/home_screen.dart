import 'package:skynexui_components/components.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var theme = useTheme(context);
    var colorsneutral = theme.colors.neutral.toMap();
    var colorSelected = colorsneutral['x100'] as String;
    var bg = colorSelected;
    return Scaffold(
      body: Box(
        styleSheet: StyleSheet(
          width: {Breakpoints.xs: 500},
          height: {Breakpoints.xs: 500},
          flexDirection: {Breakpoints.xs: 'row'},
          alignItems: {Breakpoints.xs: 'center'},
          justifyContent: {Breakpoints.xs: 'flex-start'},
          backgroundColor: {Breakpoints.xs: bg},
          margin: {Breakpoints.xs: 50},
          paddingBottom: {Breakpoints.xs: 100},
          paddingVertical: {Breakpoints.xs: 50},
          paddingHorizontal: {Breakpoints.xs: 50},
        ),
        children: [
          Box(
            styleSheet: StyleSheet(
              width: {Breakpoints.xs: 50},
              height: {Breakpoints.xs: 50},
              backgroundColor: {Breakpoints.xs: theme.colors.primary.x400},
            ),
          ),
          Box(
            styleSheet: StyleSheet(
              width: {Breakpoints.xs: 50},
              height: {Breakpoints.xs: 50},
              backgroundColor: {Breakpoints.xs: theme.colors.accent.x400},
            ),
          ),
          Box(
            styleSheet: StyleSheet(
              width: {Breakpoints.xs: 50},
              height: {Breakpoints.xs: 50},
              backgroundColor: {Breakpoints.xs: theme.colors.positive.x400},
            ),
          )
        ],
      ),
    );
  }
}
