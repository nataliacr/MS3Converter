import { API as MS3 } from './../../../ms3/ms3-v1-api-interface';
import { API as OAS } from './../../../oas/oas-30-api-interface';

export const originalResourceWithRequestBody: MS3 = {
  'settings': {
    'title': 'params',
    'baseUri': 'http://params'
  },
  'ms3_version': '1.0.1',
  'entityTypeName': 'api',
  'dataTypes': [
    {
      'type': 'string',
      'description': 'desc',
      'name': 'schema',
      'default': 'default',
      '__id': 'd0c35029-b545-4ce5-ba73-52b03910a382'
    }
  ],
  'examples': [
    {
      'title': 'ex',
      'content': '{}',
      'format': 'json',
      '__id': '9abcf4a4-98f1-47d9-adaf-b6934c2b30da'
    },
    {
      'title': 'ex2',
      'content': '<xml></xml>',
      'format': 'xml',
      '__id': '9abcf4a4-98f1-47d9-adaf-b6934c2b30db'
    }
  ],
  'resources': [
    {
      'path': '/res',
      'name': 'res',
      'methods': [
        {
          'active': true,
          'name': 'GET',
          'body': [
            {
              'contentType': 'application/json',
              'selectedExamples': [
                '9abcf4a4-98f1-47d9-adaf-b6934c2b30da',
                '9abcf4a4-98f1-47d9-adaf-b6934c2b30db'
              ],
              'type': 'd0c35029-b545-4ce5-ba73-52b03910a382'
            },
            {
              'contentType': 'application/xml',
              'selectedExamples': [
                '9abcf4a4-98f1-47d9-adaf-b6934c2b30da'
              ],
              'type': 'd0c35029-b545-4ce5-ba73-52b03910a382'
            }
          ]
        }
      ],
      '__id': 'f068746b-acd9-40c8-af83-83a89095b0a0'
    }
  ]
};

export const resultResourceWithRequestBody: OAS = {
  openapi: '3.0',
  info: {
    title: 'params',
    description: 'API description',
    version: '3.0'
  },
  paths: {
    '/res': {
      get: {
        operationId: 'RES_GET',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                '$ref': '#/components/schemas/schema'
              },
              examples: {
                'ex': {
                  '$ref': '#/components/examples/ex'
                },
                'ex2': {
                  '$ref': '#/components/examples/ex2'
                }
              }
            },
            'application/xml': {
              schema: {
                '$ref': '#/components/schemas/schema'
              },
              examples: {
                'ex': {
                  '$ref': '#/components/examples/ex'
                }
              }
            }
          }
        },
        responses: {}
      }
    }
  },
  components: {
    schemas: {
      'schema': {
        'default': 'default',
        'description': 'desc',
        'title': 'schema',
        'type': 'string',
      }
    },
    examples: {
      'ex': {
        value: '{}'
      },
      'ex2': {
        value: '<xml></xml>'
      }
    }
  }
};
