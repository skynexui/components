import 'package:skynexui_components/components.dart';
import 'package:skynexui_components/components/provider/flutter/theme.dart';

Theme useTheme(BuildContext context) {
  return context.watch<SkynexUIProvider>().theme;
}

class SkynexUIProvider extends ChangeNotifier {
  final Theme _theme = Theme();
  Theme get theme => _theme;
}
