import MS3toOAS from './../ms3/ms3-to-oas';
import * as LibraryInterfaces from './../ms3/ms3-v1-library-interface';
import * as ApiInterfaces from './../ms3/ms3-v1-api-interface';
import * as OASInterfaces from './../oas/oas-20-api-interface';
import { format } from '../common/convertor-options-interface';

const fs = require('fs');
const util = require('util');
const rmdir = require('rmdir');
const fileExistsPromise = util.promisify(fs.exists);
const rmdirPromise = util.promisify(rmdir);

const project: ApiInterfaces.API = {
  settings: {
    title: 'params',
    baseUri: 'http://params',
  },
  ms3_version: '1.0.1',
  entityTypeName: 'api'
};

test('MS3 settings should be converted to OAS successfully', async() => {
  const expectedResult: OASInterfaces.API = {
    infoObject: {
      title: 'params',
      description: 'API description',
      version: '2.0'
    }
  };

  let resultAPI;

  try {
    resultAPI = await MS3toOAS.create(project).convert();
  } catch (err) {}

  expect(resultAPI).toEqual(expectedResult);
});

test('MS3 settings to OAS conversion should fail with "library" entity type', async() => {
  const library: LibraryInterfaces.Library = {
    settings: {
      title: 'params',
      usage: 'dsdsd',
      baseUri: 'http://params',
    },
    ms3_version: '1.0.1',
    entityTypeName: 'library'
  };

  try {
    await MS3toOAS.create(library).convert();
  } catch (err) {
    expect(err.message).toEqual('Library can not be converted to swagger.');
  }
});

test('Should create api.yaml file', async() => {
  const options = {
    destinationPath: './',
    asSingleFile: true,
    fileFormat: 'yaml' as format
  };
  await MS3toOAS.create(project, options).convert();
  const fileExist = await fileExistsPromise(`./api.yaml`);
  await rmdirPromise('./api.yaml');
  expect(fileExist).toEqual(true);
});
