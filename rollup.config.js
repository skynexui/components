/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path';
import { execSync } from 'child_process';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';

const packageJson = require('./package.json');

const extensions = ['.ts', '.tsx', '.json'];

const SKNBBuildEnd = (options = {}) => {
  const { hook = 'generateBundle' } = options;
  return {
    name: 'skn-build-end',
    [hook]: async () => {
      execSync('[ -d dist ] || mkdir dist');

      const cmdExportTypes = 'yarn export:types';
      console.log(`RUN: ${cmdExportTypes}`);
      execSync(cmdExportTypes);
      console.log(`DONE: ${cmdExportTypes}`);

      const cmd = 'yarn export:docs';
      console.log(`RUN: ${cmd}`);
      execSync(cmd);
      console.log(`DONE: ${cmd}`);
    },
  };
};

export default [
  {
    input: 'lib/components.ts',
    external: (id) => {
      return /^react|styled-jsx|next/.test(id);
    },
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: packageJson.name,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      alias({
        entries: [
          {
            find: '@lib',
            replacement: () => {
              return path.resolve(__dirname, 'lib');
            },
          },
        ],
      }),
      resolve({
        jsnext: true,
        extensions,
      }),
      commonjs(),
      babel({
        babelHelpers: 'inline',
        exclude: 'node_modules/**',
        extensions,
      }),
      SKNBBuildEnd(),
    ],
  },
  {
    input: 'types/components.d.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    external: [/\.css$/],
    plugins: [
      alias({
        entries: [
          {
            find: '@lib',
            replacement: () => {
              return path.resolve(__dirname, 'types/');
            },
          },
        ],
      }),
      dts(),
    ],
  },
];
