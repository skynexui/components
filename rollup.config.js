import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
// import dts from 'rollup-plugin-dts';

const packageJson = require('./package.json');

export default [
  {
    input: 'lib/components.ts',
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
        sourcemap: true
      }
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      alias({
        entries: [
          // { find: 'components/', replacement: './lib/components' },
          // { find: 'core/', replacement: './lib/core' },
          // { find: 'utils/', replacement: './lib/utils' },
        ]
      }),
      postcss(),
      terser()
    ],
  },
  // {
  //   input: 'dist/esm/types/components.d.ts',
  //   output: [{ file: 'dist/components.d.ts', format: "esm" }],
  //   external: [/\.css$/],
  //   plugins: [dts()],
  // },
]