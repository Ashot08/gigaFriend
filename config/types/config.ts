export type BuildMode = 'production' | 'development';
export interface BuildPaths {
  entry: string;
  outputPath: string;
  html: string;
}
export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
}
