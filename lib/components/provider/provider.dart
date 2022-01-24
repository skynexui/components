import 'package:skynexui_components/components.dart';
import 'package:skynexui_components/components/provider/flutter/theme.dart';

Theme useTheme(BuildContext context) {
  return context.watch<SkynexUIProvider>().theme;
}

Breakpoints getActiveBreakpoint(BuildContext context) {
  return Provider.of<SkynexUIProvider>(context).getActiveBreakpoint(context);
}

class SkynexUIProvider extends ChangeNotifier {
  final Theme _theme = Theme();
  Theme get theme => _theme;

  Breakpoints getActiveBreakpoint(BuildContext context) {
    var screenSize = MediaQuery.of(context).size.width;
    var activeBreakpoint = getCurrentBreakpoint(screenSize, useTheme(context));

    return activeBreakpoint;
  }
}
