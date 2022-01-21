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
          flexDirection: {Breakpoints.xs: 'column'},
          crossAxisAlignment: {Breakpoints.xs: 'stretch'}, // alignItems
          mainAxisAlignment: {Breakpoints.xs: 'flex-start'}, // justifyContent
          backgroundColor: {Breakpoints.xs: bg},
        ),
        children: [
          Text(
            'Header',
            styleSheet: StyleSheet(
              height: {Breakpoints.xs: '50'},
              paddingVertical: {Breakpoints.xs: 10},
              paddingHorizontal: {Breakpoints.xs: 15, Breakpoints.md: 50},
              backgroundColor: {Breakpoints.xs: theme.colors.primary.x400},
            ),
          ),
          FlatList(
            crossAxisCount: const {
              Breakpoints.xs: 1,
              Breakpoints.md: 2,
            },
            styleSheet: StyleSheet(
              paddingTop: {Breakpoints.xs: 15, Breakpoints.md: 50},
              paddingHorizontal: {Breakpoints.xs: 15, Breakpoints.md: 50},
              flex: {Breakpoints.xs: 1},
              crossAxisAlignment: {Breakpoints.xs: 'stretch'}, // alignItems
              backgroundColor: {Breakpoints.xs: theme.colors.primary.x200},
            ),
            data: const [1, 2, 3, 4, 5],
            itemBuilder: (context, index) {
              return Text(
                'Olaa $index',
                styleSheet: StyleSheet(backgroundColor: {
                  Breakpoints.xs: theme.colors.neutral.x500,
                }),
              );
            },
          ),
        ],
      ),
    );
  }
}
