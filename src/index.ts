import * as _ from 'lodash';
import * as Blueprint from './blueprint';
import * as Ms3 from './ms3/index';
import * as OAS from './oas/index';
import LoaderInterface from './common/loader-interface';
import ConvertorInterface from './common/convertor-interface';
import ConvertorOptions from './common/convertor-options-interface';
import * as path from 'path';

type format = 'ms3_1' | 'oas' | 'blueprint' | 'raml_08' | 'raml_10';

function validateConvertFormats(from: format, to: format) {
  if (from === to) throw new Error(`Cannot convert from ${from} to ${to}`);
}

function getLoaderByFormat(format: format, path: string): LoaderInterface {
  if (format == 'ms3_1') return Ms3.loader.create(path);
  throw new Error(`Loader of format ${format} does not exist.`);
}

function getConverterByFormat(format: format, source: any, options: ConvertorOptions ): ConvertorInterface {
  if (format == 'oas') return Ms3.convertToOAS.create(source, options);
  if (format == 'blueprint') return Ms3.convertToBlueprint.create(source, options);
  throw new Error(`Convertor to format ${format} does not exist.`);
}

export async function convertData(source: Ms3.apiInterfaces.API, from: format, to: format, options?: ConvertorOptions) {
  validateConvertFormats(from, to);
  if (!source) throw new Error('Source cannot be empty');
  const convertor = getConverterByFormat(to, source, options);
  return  convertor.convert();
}

export async function convertDataFromFile(sourcePath: string, from: format, to: format, options?: ConvertorOptions) {
  validateConvertFormats(from, to);
  if (!sourcePath.length) throw new Error('Source path cannot be empty');
  const data = await getLoaderByFormat(from, sourcePath).load();
  return convertData(data, from, to, options);
}