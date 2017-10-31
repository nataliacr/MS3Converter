import * as ApiInterfaces from './../../ms3/ms3-v1-api-interface';

const originalProject: object = {
  'settings': {
    'title': 'params',
    'baseUri': 'http://params'
  },
  'ms3_version': '1.0.1',
  'entityTypeName': 'api',
  'traits': [
    {
      'name': 'trait',
      'description': '',
      'queryParameters': [],
      'headers': [],
      'responses': [
        {
          'code': '101',
          'description': '',
          'body': [],
          'headers': [],
          'annotations': []
        }
      ],
      'annotations': [],
      '__id': 'd4cb39e9-1ec1-4390-95d9-1335eff85f8a',
      'selectedTraits': []
    }
  ]
};

const resultProject: ApiInterfaces.API = {
  'settings': {
    'title': 'params',
    'baseUri': 'http://params'
  },
  'ms3_version': '1.0.1',
  'entityTypeName': 'api',
  'traits': [
    {
      'name': 'trait',
      'responses': [
        {
          'code': '101'
        }
      ],
      '__id': 'd4cb39e9-1ec1-4390-95d9-1335eff85f8a',
    }
  ]
};

export { originalProject, resultProject };