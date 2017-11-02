import { API as MS3 } from './../../../ms3/ms3-v1-api-interface';
import { API as OAS } from './../../../oas/oas-20-api-interface';

export const originalResourceWithResponses: MS3 = {
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
          'responses': [
            {
              'code': '200',
              'body': [
                {
                  'contentType': 'application/json',
                  'selectedExamples': [
                    '9abcf4a4-98f1-47d9-adaf-b6934c2b30da'
                  ],
                  'type': 'd0c35029-b545-4ce5-ba73-52b03910a382'
                }
              ],
              'headers': [
                {
                  'displayName': 'header',
                  'description': 'description',
                  'type': 'number',
                  'example': 3,
                  'default': 5,
                  'repeat': false,
                  'required': false
                },
                {
                  'displayName': 'header2',
                  'description': 'description2',
                  'type': 'number',
                  'example': 3,
                  'default': 5,
                  'repeat': false,
                  'required': false
                }
              ],
            },
            {
              'code': '201',
              'body': [
                {
                  'contentType': 'application/json',
                  'selectedExamples': [
                    '9abcf4a4-98f1-47d9-adaf-b6934c2b30da'
                  ],
                  'type': 'd0c35029-b545-4ce5-ba73-52b03910a382'
                }
              ]
            }
          ],
        }
      ],
      '__id': 'f068746b-acd9-40c8-af83-83a89095b0a0'
    }
  ]
};

export const resultResourceWithResponses: OAS = {
  openapi: '2.0',
  info: {
    title: 'params',
    description: 'API description',
    version: '2.0'
  },
  paths: {
    '/res': {
      get: {
        operationId: 'RES_GET',
        responses: {
          '200': {
            description: 'description',
            content: {
              'application/json': {
                schema: {
                  '$ref': '#/components/schemas/schema'
                },
                examples: {
                  'ex': {
                    '$ref': '#/components/examples/ex'
                  }
                }
              }
            },
            headers: {
              'header': {
                description: 'description',
                required: true,
                schema: {
                  default: 5,
                  type: 'long'
                }
              },
              'header2': {
                description: 'description2',
                required: true,
                schema: {
                  default: 5,
                  type: 'long'
                }
              }
            }
          },
          '201': {
            description: 'description',
            content: {
              'application/json': {
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
          }
        }
      }
    }
  },
  components: { // TODO: Change this to actual converted schemas
    schemas: {
      name: {
        title: 'hello',
      }
    }
  }
};