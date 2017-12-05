import MS3toOAS from './../ms3/ms3-to-oas/index';
import ConvertorOptions from '../common/convertor-options-interface';
import { ms3Settings, oasSettings } from './files/MS3-to-OAS-20/ms3-settings-to-oas';
import { ms3DataTypes, oasDataTypes, oasDataTypesExternal } from './files/MS3-to-OAS-20/ms3-datatypes-to-oas';
import { ms3Examples, oasExamples } from './files/MS3-to-OAS-20/ms3-examples-to-oas';
import { ms3SecuritySchemes, oasSecuritySchemes } from './files/MS3-to-OAS-20/ms3-securityschemes-to-oas';
import { ms3NestedResources, oasNestedResources } from './files/MS3-to-OAS-20/ms3-nested-resources-to-oas';
import { ms3ResourceWithParameters, oasResourceWithParameters } from './files/MS3-to-OAS-20/ms3-resource-with-parameters-to-oas';
import { ms3ResourceWithRequestBody, oasResourceWithRequestBody } from './files/MS3-to-OAS-20/ms3-resource-with-request-body-to-oas';
import { ms3ResourceWithResponses, oasResourceWithResponses, oasResourceWithResponsesAndInlineExamples } from './files/MS3-to-OAS-20/ms3-resource-with-responses-to-oas';
import { ms3ResourceWithPathParameters, oasResourceWithPathParameters } from './files/MS3-to-OAS-20/ms3-resource-with-path-parameters-to-oas';

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

test('MS3 examples should be converted to OAS with references && external files should be created in "/examples" folder', async () => {
  const config: ConvertorOptions = {
    fileFormat: 'json',
    asSingleFile: false,
    destinationPath: './',
    oasVersion: '2.0'
  };

  await expect(MS3toOAS.create(ms3Examples, config).convert()).resolves.toEqual(oasExamples);

  const mainFileExist = await fileExistsPromise('./api.json');
  const examplesFolderExist = await fileExistsPromise('./examples/exampleJSON.json');
  await rmdirPromise('./api.json');
  await rmdirPromise('./examples');

  expect(mainFileExist && examplesFolderExist).toEqual(true);
});

test('MS3 security schemes should be converted to OAS 2.0 successfully', async() => {
  const options: ConvertorOptions = {
    fileFormat: 'json',
    asSingleFile: false,
    destinationPath: './',
    oasVersion: '2.0'
  };

  await expect(MS3toOAS.create(ms3DataTypes, options).convert()).resolves.toEqual(oasDataTypesExternal);
});

test('MS3 nested resources should be converted to OAS 2.0 successfully', async() => {
  const options: ConvertorOptions = {
    fileFormat: 'json',
    asSingleFile: false,
    destinationPath: './',
    oasVersion: '2.0'
  };

  await expect(MS3toOAS.create(ms3NestedResources, options).convert()).resolves.toEqual(oasNestedResources);
});

test('MS3 resource with parameters should be converted to OAS 2.0 successfully', async() => {
  const options: ConvertorOptions = {
    fileFormat: 'json',
    asSingleFile: false,
    destinationPath: './',
    oasVersion: '2.0'
  };

  await expect(MS3toOAS.create(ms3ResourceWithParameters, options).convert()).resolves.toEqual(oasResourceWithParameters);
});

test('MS3 resource with request body should be converted to OAS 2.0 successfully', async() => {
  const options: ConvertorOptions = {
    fileFormat: 'json',
    asSingleFile: false,
    destinationPath: './',
    oasVersion: '2.0'
  };

  await expect(MS3toOAS.create(ms3ResourceWithRequestBody, options).convert()).resolves.toEqual(oasResourceWithRequestBody);
});

test('MS3 resource with responses should be converted to OAS 2.0 successfully', async() => {
  const options: ConvertorOptions = {
    fileFormat: 'json',
    asSingleFile: false,
    destinationPath: './',
    oasVersion: '2.0'
  };

  await expect(MS3toOAS.create(ms3ResourceWithResponses, options).convert()).resolves.toEqual(oasResourceWithResponses);
});

test('MS3 resource with responses should be converted to OAS 2.0 with inline examples successfully', async() => {
  const options: ConvertorOptions = {
    fileFormat: 'json',
    asSingleFile: true,
    destinationPath: './',
    oasVersion: '2.0'
  };

  await expect(MS3toOAS.create(ms3ResourceWithResponses, options).convert()).resolves.toEqual(oasResourceWithResponsesAndInlineExamples);
});

test('MS3 resource with responses should be converted to OAS 2.0 with inline examples successfully', async() => {
  const options: ConvertorOptions = {
    fileFormat: 'json',
    asSingleFile: false,
    destinationPath: './',
    oasVersion: '2.0'
  };

  await expect(MS3toOAS.create(ms3ResourceWithPathParameters, options).convert()).resolves.toEqual(oasResourceWithPathParameters);
});