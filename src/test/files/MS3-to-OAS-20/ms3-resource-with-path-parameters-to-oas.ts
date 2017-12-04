import * as MS3Interface from '../../../ms3/ms3-v1-api-interface';
import * as OASInterface from '../../../oas/oas-20-api-interface';

export const ms3ResourceWithPathParameters: MS3Interface.API = {
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
      'pathVariables': [
        {
          'displayName': 'path',
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
        }
      ],
      'methods': [],
      '__id': 'f068746b-acd9-40c8-af83-83a89095b0a0'
    }
  ]
};

export const oasResourceWithPathParameters: OASInterface.API = {
  swagger: '2.0',
  info: {
    title: 'params',
    version: '2.0'
  },
  host: 'params',
  basePath: '/',
  paths: {
    '/res': {
      parameters: [
        {
          name: 'path',
          in: 'path',
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
        }
      ]
    }
  }
};