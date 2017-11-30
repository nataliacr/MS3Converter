import { API as MS3 } from './../../../ms3/ms3-v1-api-interface';
import { API as OAS } from './../../../oas/oas-30-api-interface';

export const originalOAuth20: MS3 = {
  'settings': {
    'title': 'params',
    'baseUri': 'http://params'
  },
  'ms3_version': '1.0.1',
  'entityTypeName': 'api',
  'securitySchemes': [
    {
      'name': 'Auth 2.0',
      'type': 'OAuth 2.0',
      'description': 'description',
      'settings': {
        'accessTokenUri': 'http://uri.uri',
        'authorizationGrants': [
          'client_credentials',
          'implicit'
        ],
        'authorizationUri': 'http://uri.uri',
        'scopes': [
          'HMAC-SHA1',
          'RSA-SHA1'
        ]
      },
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

export const resultOAuth20: OAS = {
  openapi: '2.0',
  info: {
    title: 'params',
    description: 'API description',
    version: '2.0'
  },
  paths: {},
  components: {
    securitySchemes: {
      'Auth 2.0': {
        description: 'description',
        type: 'oauth2',
        flows: {
          'clientCredentials': {
            scopes: [
              'HMAC-SHA1',
              'RSA-SHA1'
            ],
            tokenUrl: 'http://uri.uri'
          },
          'implicit': {
            authorizationUrl: 'http://uri.uri',
            scopes: [
              'HMAC-SHA1',
              'RSA-SHA1'
            ]
          }
        }
      }
    }
  }
};