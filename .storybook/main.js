const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');



module.exports = {
  stories: [
    "../lib/**/*.stories.mdx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  features: {
    postcss: false,
  },
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    [].push.apply(config.resolve.plugins, [
        new TsconfigPathsPlugin({extensions: config.resolve.extensions})
    ]);
    return config;
  }
}