import webpack from 'webpack';
import { BuildOptions } from '../types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildLoaders = ({isDev} : BuildOptions): webpack.RuleSetRule[] => {
  const typescriptLoader =     {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    };

  const scssLoader =       {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: {
              namedExport: false,
              exportLocalsConvention: 'as-is',
              auto: (resPath: string) => Boolean(resPath.includes('.module.')),
              localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            },
          }
        },
        "sass-loader",
      ],
    };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'url-loader',
      },
    ],
  };

  return [
    typescriptLoader,
    scssLoader,
    fileLoader,
  ];
}
