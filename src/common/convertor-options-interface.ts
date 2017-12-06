export type format = 'json' | 'yaml';

export default interface ConvertorOptions {
  destinationPath?: string;
  asSingleFile: boolean;
  fileFormat: format;
  oasVersion?: '2.0' | '3.0';
}