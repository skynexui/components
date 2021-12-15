/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  transform: {
    // '^.+\\.css$': 'jest-styled-jsx-transformer',
    // '^.+\\.(t|j)sx?': 'babel-jest',
  },
};
