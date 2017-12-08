import * as MS3Interface from '../../../ms3/ms3-v1-api-interface';
import * as OASInterface from '../../../oas/oas-30-api-interface';

export const oasPathsWithRequestBody: OASInterface.API = {
  openapi: '3.0',
  info: {
    title: 'params',
    description: 'API description',
    version: '3.0',
  },
  components: {},
  paths: {
    '/res': {
      get: {
        operationId: 'RES_GET',
        description: 'desc',
        responses: {},
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
                '$ref': '#/components/schemas/schemaXML'
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
  }
};

export const ms3ResourcesWithRequestBody: MS3Interface.API = {
  settings: {
    title: 'params',
    baseUri: 'http://base.uri',
    description: 'API description',
    version: '3.0'
  },
  ms3_version: '1.0',
  entityTypeName: 'api',
  resources: [
    {
      __id: 'uuid',
      path: '/res',
      methods: [
        {
          name: 'GET',
          active: true,
          description: 'desc',
          body: [
            {
              contentType: 'application/json',
              type: 'schema'
            },
            {
              contentType: 'application/xml',
              type: 'schemaXML'
            }
          ]
        },
        {
          name: 'POST',
          active: true
        },
        {
          name: 'PUT',
          active: true
        },
        {
          name: 'DELETE',
          active: true
        }
      ]
    }
  ]
};
