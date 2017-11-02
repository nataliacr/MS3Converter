import { API as MS3 } from './../../ms3/ms3-v1-api-interface';
import { API as OAS } from './../../oas/oas-20-api-interface';

export const originalResourcesWithRequestBody: MS3 = {
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
              'displayName': 'string',
              'type': 'string',
              'description': 'description',
              'pattern': '.*',
              'default': 'default',
              'example': 'example string',
              'repeat': false,
              'required': true,
              'enum': [
                'enum1',
                'enum2'
              ],
              'minLength': 2,
              'maxLength': 10
            },
            {
              'displayName': 'integer',
              'type': 'integer',
              'description': 'description',
              'default': 1,
              'example': 5,
              'repeat': false,
              'required': true,
              'enum': [
                'enum1',
                'enum2'
              ],
              'minimum': 2,
              'maximum': 1,
            },
            {
              'displayName': 'boolean',
              'type': 'boolean',
              'description': 'description',
              'default': true,
              'example': false,
              'repeat': false,
              'required': true
            }
          ],
          'queryParameters': [
            {
              'displayName': 'stringArray',
              'type': 'string',
              'description': 'description',
              'pattern': '.*',
              'default': 'default',
              'example': 'example string',
              'repeat': true,
              'required': false,
              'enum': [
                'enum1',
                'enum2'
              ],
              'minLength': 2,
              'maxLength': 1,
            },
            {
              'displayName': 'number',
              'type': 'number',
              'description': 'description',
              'default': 1,
              'example': 5,
              'repeat': false,
              'required': true
            }
          ]
        },
        {
          'active': true,
          'name': 'POST'
        },
        {
          'active': true,
          'name': 'PUT'
        },
        {
          'active': true,
          'name': 'DELETE'
        }
      ],
      '__id': 'f068746b-acd9-40c8-af83-83a89095b0a0'
    }
  ]
};

export const resultResourcesWithRequestBody: OAS = {
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
            name: 'string',
            in: 'header',
            description: 'description',
            required: true,
            schema: {
              type: 'string',
              default: 'default',
              pattern: '.*',
              enum: [
                'enum1',
                'enum2'
              ],
              minLength: 2,
              maxLength: 10
            }
          },
          {
            name: 'integer',
            in: 'header',
            description: 'description',
            required: true,
            schema: {
              type: 'integer',
              default: 1,
              enum: [
                'enum1',
                'enum2'
              ],
              minimum: 2,
              maximum: 1
            }
          },
          {
            name: 'boolean',
            in: 'header',
            description: 'description',
            required: true,
            schema: {
              type: 'boolean',
              default: true,
            }
          },
          {
            name: 'stringArray',
            in: 'path',
            description: 'description',
            required: true,
            schema: {
              type: 'array',
              items: {
                type: 'string',
                default: 'default',
                pattern: '.*',
                enum: [
                  'enum1',
                  'enum2'
                ],
                minLength: 2,
                maxLength: 1,
              }
            }
          },
          {
            name: 'number',
            in: 'path',
            description: 'description',
            required: true,
            schema: {
              type: 'long',
              default: 1,
            }
          }
        ]
      },
      post: {
        operationId: 'RES_POST',
        responses: {},
      },
      put: {
        operationId: 'RES_PUT',
        responses: {}
      },
      delete: {
        operationId: 'RES_DELETE',
        responses: {}
      }
    }
  },
  components: {}
};

export const originalNestedResources: MS3 = {
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
        },
        {
          'active': true,
          'name': 'POST'
        }
      ],
      '__id': 'f068746b-acd9-40c8-af83-83a89095b0a0'
    },
    {
      'path': '/nested',
      'name': 'nested',
      'parentId': 'f068746b-acd9-40c8-af83-83a89095b0a0',
      'methods': [
        {
          'active': true,
          'name': 'GET',
        }
      ],
      '__id': '880ddafe-81a1-4ff3-841e-5bb80c146997'
    }
  ]
};

export const resultNestedResources: OAS = {
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
        responses: {},
      },
      post: {
        operationId: 'RES_POST',
        responses: {},
      }
    },
    '/res/nested': {
      get: {
        operationId: 'NESTED_GET',
        responses: {},
      }
    }
  },
  components: {}
};

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
  components: { // TODO: Change this to actual converted schemas
    schemas: {
      name: {
        title: 'hello',
      }
    }
  }
};

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