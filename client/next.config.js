module.exports = {
  webpackDebMiddleware: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
};
