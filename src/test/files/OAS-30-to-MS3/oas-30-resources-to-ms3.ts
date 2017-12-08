import * as MS3Interface from '../../../ms3/ms3-v1-api-interface';
import * as OASInterface from '../../../oas/oas-30-api-interface';

export const oasPaths: OASInterface.API = {
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
            in: 'query',
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
  }
};

export const ms3Resources: MS3Interface.API = {
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
          headers: [
            {
              default: 'default',
              description: 'description',
              displayName: 'string',
              enum: [
                'enum1',
                'enum2'
              ],
              maxLength: 10,
              minLength: 2,
              pattern: '.*',
              required: true,
              type: 'string'
            },
            {
              default: true,
              description: 'description',
              displayName: 'boolean',
              required: true,
              type: 'boolean'
            }
          ],
          queryParameters: [
            {
              default: 1,
              description: 'description',
              displayName: 'integer',
              enum: [
                'enum1',
                'enum2'
              ],
              maximum: 1,
              minimum: 2,
              required: true,
              type: 'integer'
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
