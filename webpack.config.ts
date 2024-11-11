import path from "path";
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildOptions, BuildPaths } from './config/types/config';

const options: BuildOptions = {
  paths: {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    outputPath: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  },
  mode: 'development',
}

const config = buildWebpackConfig(options);

export default config;
