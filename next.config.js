const withCSS = require('@zeit/next-css');
const withSourceMaps = require('@zeit/next-source-maps');

module.exports = withCSS(
  withSourceMaps({
    target: 'serverless',
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty',
        };
      }
      return config;
    },
  }),
);
