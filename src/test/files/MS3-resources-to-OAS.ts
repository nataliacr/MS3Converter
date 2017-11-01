import { API as MS3 } from './../../ms3/ms3-v1-api-interface';
import { API as OAS } from './../../oas/oas-20-api-interface';

const originalProject: MS3 = {
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
          'description': 'desc',
          'headers': [
            {
              'displayName': 'header',
              'type': 'string',
              'repeat': true,
              'required': false
            }
          ]
        },
        {
          'active': true,
          'name': 'POST',
          'description': 'description',
          'queryParameters': [
            {
              'displayName': 'query',
              'description': 'description',
              'type': 'string',
              'enum': [
                'enum'
              ],
              'pattern': '.*',
              'minLength': '2',
              'maxLength': '3',
              'example': 'example',
              'default': 'default',
              'repeat': false,
              'required': true
            }
          ],
          'headers': [
            {
              'displayName': 'header',
              'description': 'description',
              'type': 'number',
              'enum': [

              ],
              'example': '3',
              'default': '5',
              'repeat': false,
              'required': false
            }
          ],
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
              ]
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
        },
        {
          'active': true,
          'name': 'PUT'
        },
        {
          'active': true,
          'name': 'DELETE'
        },
        {
          'active': false,
          'name': 'PATCH'
        },
        {
          'active': false,
          'name': 'OPTIONS'
        },
        {
          'active': false,
          'name': 'HEAD'
        },
        {
          'active': false,
          'name': 'TRACE'
        }
      ],
      '__id': 'f068746b-acd9-40c8-af83-83a89095b0a0'
    },
    {
      'path': '/nested',
      'parentId': 'f068746b-acd9-40c8-af83-83a89095b0a0',
      'methods': [
        {
          'active': false,
          'name': 'GET'
        },
        {
          'active': false,
          'name': 'POST'
        },
        {
          'active': false,
          'name': 'PUT'
        },
        {
          'active': false,
          'name': 'DELETE'
        },
        {
          'active': false,
          'name': 'PATCH'
        },
        {
          'active': false,
          'name': 'OPTIONS'
        },
        {
          'active': false,
          'name': 'HEAD'
        },
        {
          'active': false,
          'name': 'TRACE'
        }
      ],
      '__id': '880ddafe-81a1-4ff3-841e-5bb80c146997'
    }
  ]
};

const resultProject: OAS = {
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
        description: 'desc',
        responses: {},
        parameters: [
          {
            name: 'header',
            in: 'header',
            required: false
          }
        ]
      },
      post: {
        operationId: 'RES_POST',
        description: 'description',
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
        },
        parameters: [
          {
            name: 'header',
            in: 'header',
            description: 'description',
            required: false
          },
          {
            name: 'query',
            in: 'path',
            description: 'description',
            required: true
          }
        ]
      },
      put: {
        operationId: 'RES_PUT',
        responses: {}
      },
      delete: {
        operationId: 'RES_DELETE',
        responses: {}
      }
    },
    '/nested': {}
  },
  components: {
    schemas: {
      name: {
        title: 'hello'
      }
    }
  }
};

export { originalProject, resultProject };