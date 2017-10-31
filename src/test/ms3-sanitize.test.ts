import MS3Sanitizer from './../ms3/ms3-sanitizer';
import * as ApiInterfaces from './../ms3/ms3-v1-api-interface';
import * as LibraryInterfaces from './../ms3/ms3-v1-library-interface';
import { originalProject as originalDataTypesProject, resultProject as resultDataTypesProject } from './files/Project-with-datatypes';
import { originalProject as originalResourcesProject, resultProject as resultResourcesProject } from './files/Project-with-resources';
import { originalProject as originalSecuritySchemesProject, resultProject as resultSecuritySchemesProject } from './files/Project-with-security-schemes';
import { originalProject as originalResourcesTypesProject, resultProject as resultResourcesTypesProject } from './files/Project-with-resources-types';

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

  expect(MS3Sanitizer.create(project).sanitize()).toEqual(expectedResult);
});

test('MS3 API data types should be sanitized successfully', () => {
  expect(MS3Sanitizer.create(originalDataTypesProject).sanitize()).toEqual(resultDataTypesProject);
});

test('MS3 API resources should be sanitized successfully', () => {
  expect(MS3Sanitizer.create(originalResourcesProject).sanitize()).toEqual(resultResourcesProject);
});

test('MS3 API security schemes should be sanitized successfully', () => {
  expect(MS3Sanitizer.create(originalSecuritySchemesProject).sanitize()).toEqual(resultSecuritySchemesProject);
});

test('MS3 API resources types should be sanitized successfully', () => {
  expect(MS3Sanitizer.create(originalSecuritySchemesProject).sanitize()).toEqual(resultSecuritySchemesProject);
});