import { API } from './../../../ms3/ms3-v1-api-interface';
import Extension from './../../../ms3/ms3-v1-extension-interface';

export const originalProjectWithExamples: Extension = {
  'ms3_version': '1.0.1',
  'settings': {
    'extends': {
      'entityTypeName': 'api',
      'ms3_version': '1.0.1',
      'settings': {
        'baseUri': 'http://mergeAPI',
        'title': 'Merge API',
        'description': 'description from API'
      },
      'annotationTypes': [
        {
          'name': 'annotation',
          'description': 'desc',
          'type': 'string'
        }
      ],
      'examples': [
        {
          'title': 'example in API',
          'content': '{}',
          'format': 'json',
          '__id': '9abcf4a4-98f1-47d9-adaf-b6934c2b30da'
        },
        {
          'title': 'example',
          'content': '<xml></xml>',
          'format': 'xml',
          '__id': '9abcf4a4-98f1-47d9-adaf-b6934c2b30db',
          'annotations': [
            {
              'name': 'annotation',
              'description': 'desc',
              'type': 'string',
              'value': 'value'
            }
          ]
        }
      ],
    },
    'baseUri': 'http://mergeEXT',
    'title': 'Merge EXT',
  },
  'entityTypeName': 'api',
  'examples': [
    {
      'title': 'example in EXT',
      'content': '{}',
      'format': 'json',
      '__id': '9abcf4a4-98f1-47d9-adaf-b6934c2b30da'
    },
    {
      'title': 'example',
      'content': '<xml></xml>',
      'format': 'xml',
      '__id': '9abcf4a4-98f1-47d9-adaf-b6934c2b30db',
      'annotations': [
        {
          'name': 'annotation',
          'description': 'description',
          'type': 'string',
          'value': 'value from EXT'
        }
      ]
    }
  ],
  'annotationTypes': [
    {
      'name': 'annotation',
      'description': 'description',
      'type': 'string'
    }
  ],
};

export const resultProjectWithExamples: API = {
  'ms3_version': '1.0.1',
  'settings': {
    'baseUri': 'http://mergeEXT',
    'title': 'Merge EXT',
    'description': 'description from API'
  },
  'examples': [
    {
      'title': 'example in EXT',
      'content': '{}',
      'format': 'json',
      '__id': '9abcf4a4-98f1-47d9-adaf-b6934c2b30da'
    },
    {
      'title': 'example',
      'content': '<xml></xml>',
      'format': 'xml',
      '__id': '9abcf4a4-98f1-47d9-adaf-b6934c2b30db',
      'annotations': [
        {
          'name': 'annotation',
          'description': 'description',
          'type': 'string',
          'value': 'value from EXT'
        }
      ]
    },
    {
      'title': 'example in API',
      'content': '{}',
      'format': 'json',
      '__id': '9abcf4a4-98f1-47d9-adaf-b6934c2b30da'
    }
  ],
  'annotationTypes': [
    {
      'name': 'annotation',
      'description': 'description',
      'type': 'string'
    }
  ],
  'entityTypeName': 'api'
};