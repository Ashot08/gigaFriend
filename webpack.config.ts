import path from "path";
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildModes, BuildOptions, BuildPaths, EnvironmentOptions } from './config/types/config';
import { WebpackConfiguration } from 'webpack-cli';

export default (env: EnvironmentOptions) => {
  const mode = env.mode || BuildModes.Development;
  const isDev = mode === BuildModes.Development;
  const PORT = env.port || 8000;

  const options: BuildOptions = {
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      outputPath: path.resolve(__dirname, 'dist'),
      html: path.resolve(__dirname, 'public', 'index.html'),
    },
    mode,
    isDev,
    port: PORT,
  }
  const config: WebpackConfiguration = buildWebpackConfig(options);
  return config;
}


