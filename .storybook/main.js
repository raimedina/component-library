const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  // Define onde estão os arquivos de stories
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  // Addons padrão do Storybook
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',

  ],

  // Definição correta do framework
  framework: '@storybook/react-webpack5',

  // Configuração personalizada do Webpack
  webpackFinal: async (config) => {
    config.resolve.extensions.push('.ts', '.tsx');

    // Atalhos de importação
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@assets': path.resolve(__dirname, '../src/assets'),
    };
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            require.resolve('@babel/preset-env'),
            require.resolve('@babel/preset-react'),
          ],
        },
      },
    });
    // Loader para imagens
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp)$/i,
      type: 'asset/resource',
    });

    // Loader para SVG
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash:8][ext]',
      },
    });

    // Loader para SCSS
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            sourceMap: true,
            modules: {
              auto: true,
            },
          },
        },
        'sass-loader',
      ],
    });

    // Loader para TypeScript
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            require.resolve('@babel/preset-env'),
            require.resolve('@babel/preset-react'),
            require.resolve('@babel/preset-typescript'),
          ],
          plugins: [
            process.env.NODE_ENV === 'development' && require.resolve('react-refresh/babel'),
          ].filter(Boolean),
        },
      },
    });

    // Plugin React Refresh apenas em desenvolvimento
    if (process.env.NODE_ENV === 'development') {
      config.plugins.push(new ReactRefreshWebpackPlugin());
    }

    return config;
  },
};
