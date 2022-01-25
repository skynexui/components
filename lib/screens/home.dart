import 'package:skynexui_components/components.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Box(
        styleSheet: StyleSheet(
          backgroundColor: {Breakpoints.xs: '#565678'},
          margin: {Breakpoints.xs: '50'},
          padding: {Breakpoints.xs: '50'},
        ),
        children: [
          Text('Olá pessoas!'),
        ],
      ),
    );
  }
}
