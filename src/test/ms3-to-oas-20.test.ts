import MS3toOAS from './../ms3/ms3-to-oas/index';
import ConvertorOptions from '../common/convertor-options-interface';
import { ms3Settings, oasSettings } from './files/MS3-to-OAS-20/ms3-settings-to-oas';
import { ms3DataTypes, oasDataTypes, oasDataTypesExternal } from './files/MS3-to-OAS-20/ms3-datatypes-to-oas';

import { exists } from 'fs';
import { promisify } from 'util';
import * as rmdir from 'rmdir';

const fileExistsPromise = promisify(exists);
const rmdirPromise = promisify(rmdir);

test('MS3 settings should be converted to OAS 2.0 successfully', async () => {
  const options: ConvertorOptions = {
    fileFormat: 'json',
    asSingleFile: true,
    oasVersion: '2.0'
  };

  await expect(MS3toOAS.create(ms3Settings, options).convert()).resolves.toEqual(oasSettings);
});

test('MS3 datatypes should be converted to OAS 2.0 definitions successfully', async () => {
  const options: ConvertorOptions = {
    fileFormat: 'json',
    asSingleFile: true,
    oasVersion: '2.0'
  };

  await expect(MS3toOAS.create(ms3DataTypes, options).convert()).resolves.toEqual(oasDataTypes);
});

test('MS3 datatypes should be converted to OAS 2.0 definitions with references && external files should be created in "/schemas" folder', async() => {
  const options: ConvertorOptions = {
    fileFormat: 'json',
    asSingleFile: false,
    destinationPath: './',
    oasVersion: '2.0'
  };

  await expect(MS3toOAS.create(ms3DataTypes, options).convert()).resolves.toEqual(oasDataTypesExternal);

  const mainFileExist = await fileExistsPromise('./api.json');
  const schemasFolderExist = await fileExistsPromise('./schemas/ArrayInclude.json');
  await rmdirPromise('./api.json');
  await rmdirPromise('./schemas');

  expect(mainFileExist && schemasFolderExist).toEqual(true);
});