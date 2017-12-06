import * as MS3Interface from '../../../ms3/ms3-v1-api-interface';
import * as OASInterface from '../../../oas/oas-20-api-interface';

export const ms3ResourceWithParameters: MS3Interface.API = {
  settings: {
    title: 'params',
    baseUri: 'http://params',
  },
  ms3_version: '1.0.1',
  entityTypeName: 'api',
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

export const oasResourceWithParameters: OASInterface.API = {
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
        description: 'desc',
        responses: {},
        parameters: [
          {
            name: 'string',
            in: 'header',
            description: 'description',
            type: 'string',
            default: 'default',
            pattern: '.*',
            enum: [
              'enum1',
              'enum2'
            ],
            minLength: 2,
            maxLength: 10
          },
          {
            name: 'integer',
            in: 'header',
            description: 'description',
            type: 'integer',
            default: 1,
            enum: [
              'enum1',
              'enum2'
            ],
            minimum: 2,
            maximum: 1
          },
          {
            name: 'boolean',
            in: 'header',
            description: 'description',
            type: 'boolean',
            default: true
          },
          {
            name: 'stringArray',
            in: 'query',
            description: 'description',
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
              maxLength: 1
            }
          },
          {
            name: 'number',
            in: 'query',
            description: 'description',
            type: 'number',
            default: 1
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