/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-param-reassign */
const path = require('path');

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

module.exports = {
  webpack: (config) => {
    if (IS_DEVELOPMENT) {
      config.resolve.alias.react = path.resolve(
        __dirname,
        '..',
        '..',
        'node_modules',
        'react'
      );
    }

    return config;
  },
};
