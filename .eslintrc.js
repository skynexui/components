module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'import/extensions': ['off'],
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-declaration',
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
