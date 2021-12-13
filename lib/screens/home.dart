import 'package:components/components.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Box(
        styleSheet: StyleSheet(
          backgroundColor: {Breakpoints.xs: '#aabbcc'},
          margin: {Breakpoints.xs: 50},
          padding: {Breakpoints.xs: 50},
        ),
        children: [
          Text('Olá'),
        ],
      ),
    );
  }
}
