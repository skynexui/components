
const plugin = require('../index');
const pluginTester = require('babel-plugin-tester').default;

const tests = [
  // import react-native
  {
    title: 'import from "native-native"',
    code: `import ReactNative from '@skynexui/native';
import { View } from '@skynexui/native';
import { Invalid, View as MyView } from '@skynexui/native';
import * as ReactNativeModules from '@skynexui/native';`,
    snapshot: true
  },
  {
    title: 'import from "native-native"',
    code: `import ReactNative from '@skynexui/native';
import { View } from '@skynexui/native';
import { Invalid, View as MyView } from '@skynexui/native';
import * as ReactNativeModules from '@skynexui/native';`,
    snapshot: true,
    pluginOptions: { commonjs: true }
  },
  {
    title: 'import from "@skynexui/web"',
    code: `import { unstable_createElement } from '@skynexui/web';
import { StyleSheet, View, TouchableOpacity, processColor } from '@skynexui/web';
import * as ReactNativeModules from '@skynexui/web';`,
    snapshot: true
  },
  {
    title: 'export from "@skynexui/native"',
    code: `export { View } from '@skynexui/native';
export { StyleSheet, Text, unstable_createElement } from '@skynexui/native';`,
    snapshot: true
  },
  {
    title: 'export from "@skynexui/web"',
    code: `export { View } from '@skynexui/web';
export { StyleSheet, Text, unstable_createElement } from '@skynexui/web';`,
    snapshot: true
  },
  {
    title: 'require "@skynexui/native"',
    code: `const ReactNative = require('@skynexui/native');
const { View } = require('@skynexui/native');
const { StyleSheet, TouchableOpacity } = require('@skynexui/native');`,
    snapshot: true
  },
  {
    title: 'require "@skynexui/native"',
    code: `const ReactNative = require('@skynexui/native');
const { View } = require('@skynexui/native');
const { StyleSheet, TouchableOpacity } = require('@skynexui/native');`,
    snapshot: true,
    pluginOptions: { commonjs: true }
  },
  {
    title: 'require "@skynexui/web"',
    code: `const ReactNative = require('@skynexui/web');
const { unstable_createElement } = require('@skynexui/web');
const { StyleSheet, View, TouchableOpacity, processColor } = require('@skynexui/web');`,
    snapshot: true
  }
];

pluginTester({
  babelOptions: {
    generatorOpts: {
      jsescOption: {
        quotes: 'single'
      }
    }
  },
  plugin,
  // pluginName: 'Rewrite react-native to @skynexui/web',
  pluginName: 'Rewrite @skynexui/native to @skynexui/web',
  tests
});
