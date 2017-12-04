import * as MS3Interface from '../../../ms3/ms3-v1-api-interface';
import * as OASInterface from '../../../oas/oas-20-api-interface';

export const ms3ResourceWithResponses: MS3Interface.API = {
  settings: {
    title: 'params',
    baseUri: 'http://params',
  },
  ms3_version: '1.0.1',
  entityTypeName: 'api',
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
                  'contentType': 'application/xml',
                  'selectedExamples': [
                    '9abcf4a4-98f1-47d9-adaf-b6934c2b30db'
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

export const oasResourceWithResponsesAndInlineExamples: OASInterface.API = {
  swagger: '2.0',
  info: {
    title: 'params',
    version: '2.0'
  },
  host: 'params',
  basePath: '/',
  paths: {
    '/res': {
      get: {
        operationId: 'RES_GET',
        responses: {
          '200': {
            description: 'description',
            schema: {
              '$ref': '#/definitions/schema'
            },
            examples: {
              'application/json': {
                'content': '{}'
              }
            },
            headers: {
              'header': {
                description: 'description',
                type: 'number',
                default: 5,
              },
              'header2': {
                description: 'description2',
                type: 'number',
                default: 5,
              }
            }
          },
          '201': {
            description: 'description',
            schema: {
              '$ref': '#/definitions/schema'
            },
            examples: {
              'application/xml': {
                content: '<xml></xml>'
              }
            }
          }
        }
      }
    }
  },
  definitions: {
    'schema': {
      '$ref': './schemas/schema.json#schema'
    }
  }
};

export const oasResourceWithResponses: OASInterface.API = {
  swagger: '2.0',
  info: {
    title: 'params',
    version: '2.0'
  },
  host: 'params',
  basePath: '/',
  paths: {
    '/res': {
      get: {
        operationId: 'RES_GET',
        responses: {
          '200': {
            description: 'description',
            schema: {
              '$ref': '#/definitions/schema'
            },
            examples: {
              'ex': {
                '$ref': './examples/ex.json#ex'
              }
            },
            headers: {
              'header': {
                description: 'description',
                type: 'number',
                default: 5,
              },
              'header2': {
                description: 'description2',
                type: 'number',
                default: 5,
              }
            }
          },
          '201': {
            description: 'description',
            schema: {
              '$ref': '#/definitions/schema'
            },
            examples: {
              'ex2': {
                '$ref': './examples/ex2.json#ex2'
              }
            }
          }
        }
      }
    }
  },
  definitions: {
    'schema': {
      '$ref': './schemas/schema.json#schema'
    }
  }
};