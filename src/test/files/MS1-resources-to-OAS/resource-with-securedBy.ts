import { API as MS3 } from './../../../ms3/ms3-v1-api-interface';
import { API as OAS } from './../../../oas/oas-20-api-interface';

export const originalResourceWithSecuredBy: MS3 = {
  'settings': {
    'title': 'params',
    'baseUri': 'http://params'
  },
  'ms3_version': '1.0.1',
  'entityTypeName': 'api',
  'securitySchemes': [
    {
      'name': 'auth20',
      'type': 'OAuth 2.0',
      '__id': 'f068746b-acd9-40c8-af83-83a89095b0a1',
      'settings': {
        'authorizationGrants': [
          'client_credentials',
          'implicit'
        ],
        'accessTokenUri': 'http://hey.there',
        'scopes': []
      }
    },
    {
      'name': 'Digest Auth',
      'type': 'Digest Authentication',
      'describedBy': {},
      '__id': 'a3c8a352-2b7f-4955-839d-d980da30ae4f'
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
          'securedBy': ['auth20', 'Digest Auth']
        }
      ],
      '__id': 'f068746b-acd9-40c8-af83-83a89095b0a0'
    }
  ]
};

export const resultResourceWithSecuredBy: OAS = {
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
        security: {
          'auth20': []
        }
      }
    }
  },
  components: {
    securitySchemes: {
      'auth20': {
        type: 'oauth2',
        flows: {
          clientCredentials: {
            scopes: [],
            tokenUrl: 'http://hey.there'
          },
          implicit: {
            scopes: [],
            authorizationUrl: 'https://auth.url'
          },
        }
      }
    }
  }
};