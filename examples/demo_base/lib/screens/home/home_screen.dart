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
          // overflowY: {Breakpoints.xs: 'scroll'},
          position: {Breakpoints.xs: 'relative'},
          // flexDirection: {Breakpoints.xs: 'row'},
          // crossAxisAlignment: {Breakpoints.xs: 'stretch'}, // alignItems
          // mainAxisAlignment: {Breakpoints.xs: 'flex-start'}, // justifyContent
          backgroundColor: {Breakpoints.xs: bg},
        ),
        children: [
          Box(
            styleSheet: StyleSheet(
              height: {Breakpoints.xs: '550'},
              backgroundColor: {Breakpoints.xs: theme.colors.positive.x800},
            ),
          ),
          Text(
            'Header',
            styleSheet: StyleSheet(
              position: {Breakpoints.xs: 'absolute'},
              top: {Breakpoints.xs: '300'},
              right: {Breakpoints.xs: '200'},
              bottom: {Breakpoints.xs: '10'},
              margin: {Breakpoints.xs: '10'},
              boxShadowOffsetX: {Breakpoints.xs: '10'},
              boxShadowOffsetY: {Breakpoints.xs: '10'},
              boxShadowBlur: {Breakpoints.xs: '10'},
              boxShadowSpread: {Breakpoints.xs: '10'},
              boxShadowColor: {Breakpoints.xs: 'rgba(0,0,0,0.5)'},
              borderRadius: {Breakpoints.xs: '10'},
              borderRadiusTopLeft: {Breakpoints.xs: '20'},
              paddingVertical: {Breakpoints.xs: '10'},
              paddingHorizontal: {Breakpoints.xs: '15', Breakpoints.md: '50'},
              backgroundColor: {Breakpoints.xs: theme.colors.primary.x400},
            ),
          ),
          // Box(
          //   styleSheet: StyleSheet(
          //     height: {Breakpoints.xs: '550'},
          //     backgroundColor: {Breakpoints.xs: theme.colors.accent.x800},
          //   ),
          // ),
          // Box(
          //   styleSheet: StyleSheet(
          //     height: {Breakpoints.xs: '550'},
          //     backgroundColor: {Breakpoints.xs: theme.colors.negative.x800},
          //   ),
          // ),
        ],
      ),
    );
  }
}


// FlatList(
//             crossAxisCount: const {
//               Breakpoints.xs: 1,
//               Breakpoints.md: 2,
//             },
//             styleSheet: StyleSheet(
//               paddingTop: {Breakpoints.xs: 15, Breakpoints.md: 50},
//               paddingHorizontal: {Breakpoints.xs: 15, Breakpoints.md: 50},
//               flex: {Breakpoints.xs: 1},
//               crossAxisAlignment: {Breakpoints.xs: 'stretch'}, // alignItems
//               backgroundColor: {Breakpoints.xs: theme.colors.primary.x200},
//             ),
//             data: const [1, 2, 3, 4, 5],
//             itemBuilder: (context, index) {
//               return Text(
//                 'Olaa $index',
//                 styleSheet: StyleSheet(backgroundColor: {
//                   Breakpoints.xs: theme.colors.neutral.x500,
//                 }),
//               );
//             },
//           )