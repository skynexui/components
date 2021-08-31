import dts from 'rollup-plugin-dts'
// import esbuild from 'rollup-plugin-esbuild';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import ts from 'rollup-plugin-typescript2';
import flatDts from 'rollup-plugin-flat-dts';

import pkg from '../../package.json';

const filePaths = [
  './src/components/Text/styles.ts',
  // './src/components/Text/web/index.tsx',
  // './src/components/Text/native/index.tsx',
];

const plugins =  [
  commonjs(),
  ts(),
  resolve({
    preferBuiltins: true,
  }),
];

const external = [
  ...Object.keys(pkg.peerDependencies),
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

export default {
  input: toRollupInputPaths(filePaths),
  output: [
    {
      dir: 'dist',
      entryFileNames: '[name].js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      plugins: [
        flatDts(),
      ],
    },
  ],
  external,
  plugins,
};
