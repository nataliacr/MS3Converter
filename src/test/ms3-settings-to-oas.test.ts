import MS3toOAS from './../ms3/ms3-to-oas';
import * as ApiInterfaces from './../ms3/ms3-v1-api-interface';
import * as LibraryInterfaces from './../ms3/ms3-v1-library-interface';
import * as OASInterfaces from './../oas/oas-20-api-interface';

test('MS3 settings should be converted to OAS successfully', () => {
  const project: ApiInterfaces.API = {
    settings: {
      title: 'params',
      baseUri: 'http://params',
    },
    ms3_version: '1.0.1',
    entityTypeName: 'api'
  };

  const expectedResult: OASInterfaces.API = {
    infoObject: {
      title: 'params',
      description: 'API description',
      version: '2.0'
    }
  };

  let resultAPI;

  try {
    resultAPI = MS3toOAS.create(project).convert();
  } catch (err) {}

  expect(resultAPI).toEqual(expectedResult);
});

test('MS3 settings to OAS convertion should fail with "library" entity type', () => {
  const library: LibraryInterfaces.Library = {
    settings: {
      title: 'params',
      usage: 'dsdsd',
      baseUri: 'http://params',
    },
    ms3_version: '1.0.1',
    entityTypeName: 'library'
  };

  expect( () => MS3toOAS.create(library).convert() ).toThrowError('Library can not be converted to swagger.');
});
