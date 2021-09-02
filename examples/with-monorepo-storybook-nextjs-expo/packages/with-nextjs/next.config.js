const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['common-ui'], {
  resolveSymlinks: true,
});

module.exports = withPlugins([withTM], {
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@skynexui/native$': '@skynexui/web',
    }
    return config;
  } 
});
