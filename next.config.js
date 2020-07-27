const nextEnv = require('next-env');
const webpack = require('webpack');
const dotEnvLoad = require('dotenv-load');

dotEnvLoad();

const withNextEnv = nextEnv({
  staticPrefix: 'NEXT_STATIC_',
  publicPrefix: 'NEXT_PUBLIC_'
});

module.exports = withNextEnv({
  webpack(config, options) {
    config.module.rules.push(
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    );

    return config;
  }
});
