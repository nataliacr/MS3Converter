import MS3Sanitizer from './../ms3/ms3-sanitizer';
import * as ApiInterfaces from './../ms3/ms3-v1-api-interface';
import * as LibraryInterfaces from './../ms3/ms3-v1-library-interface';
import { originalProject as originalDataTypesProject, resultProject as resultDataTypesProject } from './files/Project-with-datatypes';
import { originalProject as originalResourcesProject, resultProject as resultResourcesProject } from './files/Project-with-resources';
import { originalProject as originalSecuritySchemesProject, resultProject as resultSecuritySchemesProject } from './files/Project-with-security-schemes';
import { originalProject as originalResourcesTypesProject, resultProject as resultResourcesTypesProject } from './files/Project-with-resources-types';
import { originalProject as originalTraitsProject, resultProject as resultTraitsProject } from './files/Project-with-traits';

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

test('MS3 API traits should be sanitized successfully', () => {
  expect(MS3Sanitizer.create(originalTraitsProject).sanitize()).toEqual(resultTraitsProject);
});

test('MS3 API examples should be sanitized successfully', () => {
  const originalExamplesProject: any = {
    'settings': {
      'title': 'params',
      'baseUri': 'http://params'
    },
    'ms3_version': '1.0.1',
    'entityTypeName': 'api',
    'examples': [
      {
        'title': 'example',
        'content': '{}',
        'format': 'json',
        'annotations': [],
        '__id': 'ee86a166-8725-4757-b90c-8c3c3b8fffcf'
      }
    ]
  };

  const resultExamplesProject: ApiInterfaces.API = {
    'settings': {
      'title': 'params',
      'baseUri': 'http://params'
    },
    'ms3_version': '1.0.1',
    'entityTypeName': 'api',
    'examples': [
      {
        'title': 'example',
        'content': '{}',
        'format': 'json',
        '__id': 'ee86a166-8725-4757-b90c-8c3c3b8fffcf'
      }
    ]
  };
  expect(MS3Sanitizer.create(originalExamplesProject).sanitize()).toEqual(resultExamplesProject);
});

test('MS3 API documentation should be sanitized successfully', () => {
  const originalDocumentationProject: any = {
    'settings': {
      'title': 'params',
      'baseUri': 'http://params'
    },
    'ms3_version': '1.0.1',
    'entityTypeName': 'api',
    'documentation': [
      {
        'name': 'doc',
        'description': '',
        'annotations': [
          {
            'name': 'string',
            'type': 'string',
            'enum': [],
            'pattern': '',
            'value': ''
          }
        ],
        '__id': 'd60863bf-0705-49d4-9584-cff043d2efd2'
      }
    ],
  };

  const resultDocumentationProject: ApiInterfaces.API = {
    'settings': {
      'title': 'params',
      'baseUri': 'http://params'
    },
    'ms3_version': '1.0.1',
    'entityTypeName': 'api',
    'documentation': [
      {
        'name': 'doc',
        'annotations': [
          {
            'name': 'string',
            'type': 'string'
          }
        ],
        '__id': 'd60863bf-0705-49d4-9584-cff043d2efd2'
      }
    ],
  };
  expect(MS3Sanitizer.create(originalDocumentationProject).sanitize()).toEqual(resultDocumentationProject);
});

test('MS3 API documentation should be sanitized successfully', () => {
  const originalAnnotationTypesProject: any = {
    'settings': {
      'title': 'params',
      'baseUri': 'http://params'
    },
    'ms3_version': '1.0.1',
    'entityTypeName': 'api',
    'annotationTypes': [
      {
        'name': 'string',
        'type': 'string',
        'enum': [],
        'pattern': ''
      },
      {
        'name': 'name',
        'type': 'object',
        'enum': [],
        'pattern': '',
        'properties': [
          {
            'name': 'default',
            'type': 'string',
            'required': false,
            'enum': []
          },
          {
            'name': 'default',
            'type': 'integer',
            'required': false,
            'enum': [],
            'pattern': ''
          }
        ],
        'allowedTargets': [
          'Method'
        ]
      }
    ]
  };

  const resultAnnotationTypesProject: ApiInterfaces.API = {
    'settings': {
      'title': 'params',
      'baseUri': 'http://params'
    },
    'ms3_version': '1.0.1',
    'entityTypeName': 'api',
    'annotationTypes': [
      {
        'name': 'string',
        'type': 'string'
      },
      {
        'name': 'name',
        'type': 'object',
        'properties': [
          {
            'name': 'default',
            'type': 'string',
            'required': false
          },
          {
            'name': 'default',
            'type': 'integer',
            'required': false
          }
        ],
        'allowedTargets': [
          'Method'
        ]
      }
    ]
  };
  expect(MS3Sanitizer.create(originalAnnotationTypesProject).sanitize()).toEqual(resultAnnotationTypesProject);
});