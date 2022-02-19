/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
console.log('[Coder] running...');

const stylesheetFile = require('./files/stylesheet');
const themeFile = require('./files/theme');

themeFile.generators.Theme_typography_file();
themeFile.generators.Theme_colors();
themeFile.generators.Theme_breakpoints();
themeFile.generators.Theme_typography();
stylesheetFile.generators.StyleSheet_attributes();
stylesheetFile.generators.StyleSheet_constructor();
