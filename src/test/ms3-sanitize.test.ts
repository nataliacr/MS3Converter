import MS3Sanitizer from './../ms3/ms3-sanitizer';
import * as ApiInterfaces from './../ms3/ms3-v1-api-interface';
import * as LibraryInterfaces from './../ms3/ms3-v1-library-interface';
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
  const project: any = {
    settings: {
      title: 'params',
      baseUri: 'http://params'
    },
    ms3_version: '1.0.1',
    entityTypeName: 'api',
    dataTypes: [
      {
        type: 'string',
        name: 'string',
        default: 'dsdsd',
        __id: '895d4b86-2029-44d1-b35c-8400daedc45e'
      },
      {
        name: 'array of numbers',
        type: 'array',
        uniqueItems: false,
        items: {
          type: 'number',
          multipleOf: 3
        },
        __id: '56b0cc99-f79a-49cc-936d-c30ffad77a02'
      },
      {
        name: 'object',
        type: 'object',
        properties: [
          {
            name: 'default-1',
            type: 'array',
            uniqueItems: false,
            items: {
              type: 'string'
            }
          },
          {
            name: 'default-2',
            description: '',
            type: 'object',
            required: false,
            mode: 'form',
            properties: [
              {
                name: 'default-1',
                description: 'dddd',
                type: 'integer',
                required: false,
                mode: 'form',
                example: '',
                default: '',
                pattern: '',
                minLength: '',
                maxLength: '',
                format: '',
                minimum: '',
                maximum: '',
                maxProperties: '',
                minProperties: ''
              }
            ],
            example: '',
            default: '',
            pattern: '',
            minLength: '',
            maxLength: '',
            format: '',
            minimum: '',
            maximum: '',
            maxProperties: '',
            minProperties: ''
          }
        ],
        __id: '2422df32-35e0-4363-bcbb-c23d6d6dba22',
        maxItems: '',
        minItems: ''
      }
    ]
  };

  const expectedResult: ApiInterfaces.API = {
    settings: {
      title: 'params',
      baseUri: 'http://params'
    },
    ms3_version: '1.0.1',
    entityTypeName: 'api',
    dataTypes: [
      {
        type: 'string',
        name: 'string',
        default: 'dsdsd',
        __id: '895d4b86-2029-44d1-b35c-8400daedc45e'
      },
      {
        name: 'array of numbers',
        type: 'array',
        uniqueItems: false,
        items: {
          type: 'number',
          multipleOf: 3
        },
        __id: '56b0cc99-f79a-49cc-936d-c30ffad77a02'
      },
      {
        name: 'object',
        type: 'object',
        properties: [
          {
            name: 'default-1',
            type: 'array',
            uniqueItems: false,
            items: {
              type: 'string'
            }
          },
          {
            name: 'default-2',
            type: 'object',
            required: false,
            properties: [
              {
                name: 'default-1',
                description: 'dddd',
                type: 'integer',
                required: false
              }
            ]
          }
        ],
        __id: '2422df32-35e0-4363-bcbb-c23d6d6dba22'
      }
    ]
  };

  expect(MS3Sanitizer.create(project).sanitize()).toEqual(expectedResult);
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