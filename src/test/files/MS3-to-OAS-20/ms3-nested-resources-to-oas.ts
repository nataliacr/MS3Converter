import * as MS3Interface from '../../../ms3/ms3-v1-api-interface';
import * as OASInterface from '../../../oas/oas-20-api-interface';

export const ms3NestedResources: MS3Interface.API = {
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

export const oasNestedResources: OASInterface.API = {
  swagger: '2.0',
  info: {
    title: 'params',
    version: '2.0'
  },
  host: 'params',
  basePath: '/',
  paths: {
    '/res': {
      'get': {
        operationId: 'RES_GET',
        responses: {},
      },
      'post': {
        operationId: 'RES_POST',
        responses: {},
      }
    },
    '/res/nested': {
      'get': {
        operationId: 'NESTED_GET',
        responses: {},
      }
    }
  }
};