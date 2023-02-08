module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.output.publicPath = '/win-nx-playground/';
    return config;
  },
};
