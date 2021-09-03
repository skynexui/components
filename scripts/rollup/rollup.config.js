// TODO: How to manage .d.ts files?
// https://github.com/alexjoverm/typescript-library-starter/blob/master/rollup.config.ts
import babel from "@rollup/plugin-babel";
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from "@rollup/plugin-node-resolve";
import { rollupInputFiles } from './rollupInputFiles';

import pkg from '../../package.json';

const EXTENSIONS = [".ts", ".tsx"];

const plugins =  [
  peerDepsExternal(),
  commonjs(),
  resolve({
    preferBuiltins: true,
    extensions: EXTENSIONS,
  }),
  babel({
    extensions: EXTENSIONS,  // Compile our TypeScript files
    babelHelpers: 'bundled',
    include: EXTENSIONS.map(ext => `src/**/*${ext}`),
  }),
];

const external = [
  ...Object.keys(pkg.devDependencies),
];

export default [
  {
    input: rollupInputFiles.web,
    output: [
      {
        dir: 'dist-web',
        entryFileNames: '[name].js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
    ],
    external,
    plugins,
  },
  {
    input: rollupInputFiles.native,
    output: [
      {
        dir: 'dist-native',
        entryFileNames: '[name].js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
    ],
    external,
    plugins,
  }
];
