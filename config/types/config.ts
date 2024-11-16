export type BuildMode = BuildModes.Production | BuildModes.Development;
export interface BuildPaths {
  entry: string;
  outputPath: string;
  html: string;
}
export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: string | number;
}

export interface EnvironmentOptions {
  port: number | string,
  mode: BuildMode,
}

export enum BuildModes {
  Production = 'production',
  Development = 'development',
}
