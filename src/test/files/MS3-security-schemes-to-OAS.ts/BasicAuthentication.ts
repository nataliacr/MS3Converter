import { API as MS3 } from './../../../ms3/ms3-v1-api-interface';
import { API as OAS } from './../../../oas/oas-30-api-interface';

export const originalBasicAuth: MS3 = {
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
      'description': 'description',
      'describedBy': {
        'headers': [
          {
            'displayName': 'header',
            'type': 'date',
            'repeat': false,
            'required': false
          },
          {
            'displayName': 'header2',
            'type': 'integer',
            'repeat': false,
            'required': false,
          }
        ],
        'queryParameters': [
          {
            'displayName': 'qparam',
            'type': 'integer',
            'example': 2,
            'default': 3,
            'repeat': false,
            'required': false
          }
        ],
        'responses': [
          {
            'code': '200',
            'description': 'desc'
          }
        ]
      },
      '__id': 'a3c8a352-2b7f-4955-839d-d980da30ae4f'
    }
  ]
};

export const resultBasicAuth: OAS = {
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
        description: 'description',
        type: 'http',
        scheme: 'basic'
      }
    }
  }
};