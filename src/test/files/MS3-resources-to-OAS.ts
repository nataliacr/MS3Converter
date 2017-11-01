import { API as MS3 } from './../../ms3/ms3-v1-api-interface';
import { API as OAS } from './../../oas/oas-20-api-interface';

const originalProject: MS3 = {
  'settings': {
    'title': 'params',
    'baseUri': 'http://params'
  },
  'ms3_version': '1.0.1',
  'entityTypeName': 'api',
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
                  'contentType': 'application/pdf',
                }
              ]
            }
          ],
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
        responses: {}
      },
      post: {
        operationId: 'RES_POST',
        description: 'description',
        responses: {},
        requestBody: {
          content: {
            'application/json': {
              schema: {
                '$ref': '#/components/schemas/d0c35029-b545-4ce5-ba73-52b03910a382'
              },
              examples: {
                '9abcf4a4-98f1-47d9-adaf-b6934c2b30da': {
                  '$ref': '#/components/examples/9abcf4a4-98f1-47d9-adaf-b6934c2b30da'
                }
              }
            }
          }
        }
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
  components: {}
};

export { originalProject, resultProject };