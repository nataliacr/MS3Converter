import MS3Sanitizer from './../ms3/ms3-sanitizer';
import * as ApiInterfaces from './../ms3/ms3-v1-api-interface';
import * as LibraryInterfaces from './../ms3/ms3-v1-library-interface';

test('MS3 API settings should be sanitized successfully', () => {
  const project: any = {
    settings: {
      securedBy: [],
      baseUriParameters: [],
      protocols: [
        'HTTP'
      ],
      annotations: [],
      title: 'params',
      description: 'dsdsd',
      baseUri: 'http://params',
      version: '',
      mediaType: ''
    },
    ms3_version: '1.0.1',
    entityTypeName: 'api'
  };

  const expectedResult: ApiInterfaces.API = {
    settings: {
      protocols: [
        'HTTP'
      ],
      title: 'params',
      description: 'dsdsd',
      baseUri: 'http://params'
    },
    ms3_version: '1.0.1',
    entityTypeName: 'api'
  };

  let error;
  let resultAPI;

  try {
    resultAPI = MS3Sanitizer.create(project).sanitize();
  } catch (err) {
    error = err.message;
  }

  expect(error).toBe(undefined);
  expect(resultAPI).toEqual(expectedResult);
});

test('MS3 Library settings should be sanitized successfully', () => {
  const project: any = {
    settings: {
      securedBy: [],
      baseUriParameters: [],
      protocols: [
        'HTTP'
      ],
      annotations: [],
      title: 'params',
      usage: 'dsdsd',
      baseUri: 'http://params',
      version: '',
      mediaType: ''
    },
    ms3_version: '1.0.1',
    entityTypeName: 'library'
  };

  const expectedResult: LibraryInterfaces.Library = {
    settings: {
      protocols: [
        'HTTP'
      ],
      title: 'params',
      usage: 'dsdsd',
      baseUri: 'http://params'
    },
    ms3_version: '1.0.1',
    entityTypeName: 'library'
  };

  let error;
  let resultAPI;

  try {
    resultAPI = MS3Sanitizer.create(project).sanitize();
  } catch (err) {
    error = err.message;
  }

  expect(error).toBe(undefined);
  expect(resultAPI).toEqual(expectedResult);
});