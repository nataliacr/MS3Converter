import MS3toOAS from './../ms3/ms3-to-oas/index';
import * as LibraryInterfaces from './../ms3/ms3-v1-library-interface';
import * as ApiInterfaces from './../ms3/ms3-v1-api-interface';
import * as OASInterfaces from './../oas/oas-20-api-interface';
import { format } from '../common/convertor-options-interface';
import { writeFile, exists } from 'fs';
import { promisify } from 'util';
import * as YAML from 'yamljs';
import * as rmdir from 'rmdir';

const fileExistsPromise = promisify(exists);
const rmdirPromise = promisify(rmdir);
const writeFilePromise = promisify(writeFile);

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
  await expect(MS3toOAS.create(project).convert()).resolves.toEqual(expectedResult);
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

  await expect(MS3toOAS.create(library).convert()).rejects.toEqual(new Error('Library can not be converted to swagger.'));
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

test('Should create api.json file', async() => {
  const options = {
    destinationPath: './',
    asSingleFile: true,
    fileFormat: 'json' as format
  };
  await MS3toOAS.create(project, options).convert();
  const fileExist = await fileExistsPromise(`./api.json`);
  await rmdirPromise('./api.json');
  expect(fileExist).toEqual(true);
});
