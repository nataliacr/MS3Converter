import { API } from './../../../ms3/ms3-v1-api-interface';
import Extension from './../../../ms3/ms3-v1-extension-interface';

export const originalProjectWithSettings: Extension = {
  'ms3_version': '1.0.1',
    'settings': {
    'extends': {
      'entityTypeName': 'api',
      'ms3_version': '1.0.1',
      'settings': {
        'baseUri': 'http://mergeAPI',
        'title': 'Merge API',
        'description': 'description from API',
        'securedBy': [
          'name'
        ],
        'protocols': [
          'HTTPS'
        ],
        'annotations': [
          {
            'name': 'annotation from API',
            'type': 'string',
            'value': 'Api'
          },
          {
            'name': 'annotation',
            'type': 'string',
            'value': 'should be overwritten'
          }
        ],
        'baseUriParameters': [
          {
            'displayName': 'base uri from API',
            'type': 'boolean',
            'repeat': false,
            'required': false
          },
          {
            'displayName': 'base uri',
            'type': 'string',
            'repeat': false,
            'required': false
          }
        ]
      }
    },
    'baseUri': 'http://mergeEXT',
    'title': 'Merge EXT',
    'securedBy': [
      'name2'
    ],
    'mediaType': 'application/json',
    'annotations': [
      {
        'name': 'annotation from EXT',
        'type': 'string',
        'value': 'EXT'
      },
      {
        'name': 'annotation',
        'type': 'string',
        'value': 'hey'
      }
    ],
    'baseUriParameters': [
      {
        'displayName': 'base uri from EXT',
        'type': 'boolean',
        'repeat': false,
        'required': false
      },
      {
        'displayName': 'base uri',
        'type': 'integer',
        'repeat': false,
        'required': false
      }
    ]
  },
  'entityTypeName': 'api'
};

export const resultProjectWithSettings: API = {
  'ms3_version': '1.0.1',
  'settings': {
    'baseUri': 'http://mergeEXT',
    'title': 'Merge EXT',
    'description': 'description from API',
    'securedBy': [
      'name2',
      'name'
    ],
    'protocols': [
      'HTTPS'
    ],
    'mediaType': 'application/json',
    'annotations': [
      {
        'name': 'annotation from EXT',
        'type': 'string',
        'value': 'EXT'
      },
      {
        'name': 'annotation',
        'type': 'string',
        'value': 'hey'
      },
      {
        'name': 'annotation from API',
        'type': 'string',
        'value': 'Api'
      }
    ],
    'baseUriParameters': [
      {
        'displayName': 'base uri from EXT',
        'type': 'boolean',
        'repeat': false,
        'required': false
      },
      {
        'displayName': 'base uri',
        'type': 'integer',
        'repeat': false,
        'required': false
      },
      {
        'displayName': 'base uri from API',
        'type': 'boolean',
        'repeat': false,
        'required': false
      }
    ]
  },
  'entityTypeName': 'api'
};