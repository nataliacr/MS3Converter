import { API as MS3 } from './../../../ms3/ms3-v1-api-interface';
import { API as OAS } from './../../../oas/oas-30-api-interface';

export const originalBasicAndDigestAuth: MS3 = {
  'settings': {
    'title': 'params',
    'baseUri': 'http://params'
  },
  'ms3_version': '1.0.1',
  'entityTypeName': 'api',
  'securitySchemes': [
    {
      'name': 'Basic Auth',
      'type': 'Basic Authentication',
      'describedBy': {},
      '__id': 'a3c8a352-2b7f-4955-839d-d980da30ae4f'
    },
    {
      'name': 'Digest Auth',
      'type': 'Digest Authentication',
      'describedBy': {},
      '__id': 'a3c8a352-2b7f-4955-839d-d980da30ae4f'
    }
  ]
};

export const resultBasicAndDigestAuth: OAS = {
  openapi: '3.0',
  info: {
    title: 'params',
    description: 'API description',
    version: '3.0'
  },
  paths: {},
  components: {
    securitySchemes: {
      'Basic Auth': {
        type: 'http',
        scheme: 'basic'
      }
    }
  }
};