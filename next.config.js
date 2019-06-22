const webpack = require('webpack');
const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const alias = require('./config/webpack/alias');
// next.config.js
const withCSS = require('@zeit/next-css');

require('dotenv').config();

module.exports = withTypescript(
    withCSS({
        webpack(config, options) {
            config.plugins.push(new webpack.EnvironmentPlugin(process.env));
            // Do not run type checking twice:
            if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());
            config.resolve.alias = {
                ...(config.resolve.alias || {}),
                // custom webpack aliases
                ...alias,
            };
            return config;
        },
    }),
);
