// TODO: How to manage .d.ts files?
// https://github.com/alexjoverm/typescript-library-starter/blob/master/rollup.config.ts
import babel from "@rollup/plugin-babel";
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from "@rollup/plugin-node-resolve";
// import typescript from '@rollup/plugin-typescript';

import pkg from '../../package.json';

const EXTENSIONS = [".ts", ".tsx"];

const filePathsWeb = [
  './src/components/Text/styles.ts',
  './src/components/Text/web/index.tsx',
];

const filePathsNative = [
  './src/components/Text/styles.ts',
  './src/components/Text/native/index.tsx',
];

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

export function toRollupInputPaths(filePaths) {
  return filePaths.reduce((rollupInputPaths, filePath) => {
    const filePathKey = filePath
      .replace('.tsx', '')
      .replace('.ts', '')
      .replace('./src/', '');
    return {
      ...rollupInputPaths,
      [filePathKey]: filePath,
    };
  }, {});
}

export default [
  {
    input: toRollupInputPaths(filePathsWeb),
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
    input: toRollupInputPaths(filePathsNative),
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
