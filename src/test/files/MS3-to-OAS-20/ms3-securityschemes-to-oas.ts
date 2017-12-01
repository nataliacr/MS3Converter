import * as MS3Interface from '../../../ms3/ms3-v1-api-interface';
import * as OASInterface from '../../../oas/oas-20-api-interface';

export const ms3SecuritySchemes: MS3Interface.API = {
  settings: {
    title: 'params',
    baseUri: 'http://params',
  },
  ms3_version: '1.0.1',
  entityTypeName: 'api',
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
      'describedBy': {},
      '__id': 'a3c8a352-2b7f-4955-839d-d980da30ae4f'
    },
    {
      'name': 'Basic Auth',
      'type': 'Basic Authentication',
      'description': 'description',
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

export const oasSecuritySchemes: OASInterface.API = {
  swagger: '2.0',
  info: {
    title: 'params',
    version: '2.0'
  },
  host: 'params',
  basePath: '/',
  paths: {},
  securityDefinitions: {
    'Auth 2.0': {
      description: 'description',
      type: 'oauth2',
      flow: 'implicit',
      scopes: {
        'HMAC-SHA1': '',
        'RSA-SHA1': ''
      }
    },
    'Basic Auth': {
      'type': 'basic',
      'description': 'description'
    }
  }
};