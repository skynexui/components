const withPlugins = require('next-compose-plugins');
// https://github.com/brunolemos/react-native-web-monorepo/blob/master/packages/web-nextjs/next.config.js
const withTM = require('next-transpile-modules')(['common-ui'], {
  resolveSymlinks: true,
  debug: true,
});

module.exports = withPlugins([withTM], {
  trailingSlash: true,
  webpack: (config) => {
    // console.log('config.resolve.alias', config.resolve.alias);
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      '@skynexui/native/components/Text': '@skynexui/web/components/Text',
      '@skynexui/native$': '@skynexui/web',
    }
    return config;
  } 
});
