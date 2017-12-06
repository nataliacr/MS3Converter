import { API } from './../../../ms3/ms3-v1-api-interface';
import Extension from './../../../ms3/ms3-v1-extension-interface';

export const originalProjectWithDataTypes: Extension = {
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
      'dataTypes': [
        {
          'type': 'string',
          'description': 'desc',
          'name': 'schema in API',
          'default': 'default',
          '__id': 'api-dt-id-1'
        },
        {
          'type': 'string',
          'description': 'desc',
          'name': 'schema',
          'default': 'should be overwriten',
          '__id': 'api-dt-id-2'
        },
        {
          'type': 'string',
          'description': 'desc',
          'name': 'schema2',
          'default': 'should be overwriten',
          '__id': 'api-dt-id-3'
        }
      ],
    },
    'baseUri': 'http://mergeEXT',
    'title': 'Merge EXT',
  },
  'dataTypes': [
    {
      'type': 'string',
      'description': 'desc',
      'name': 'schema in EXT',
      'default': 'default',
      '__id': 'ext-dt-id-1'
    },
    {
      'type': 'string',
      'description': 'desc',
      'name': 'schema',
      'default': 'should overwrite',
      '__id': 'ext-dt-id-2'
    },
    {
      'type': 'string',
      'description': 'desc',
      'name': 'schema2',
      'default': 'should overwrite',
      '__id': 'ext-dt-id-3'
    }
  ],
  'entityTypeName': 'api',
};

export const resultProjectWithDataTypes: API = {
  'ms3_version': '1.0.1',
  'settings': {
    'baseUri': 'http://mergeEXT',
    'title': 'Merge EXT',
    'description': 'description from API'
  },
  'dataTypes': [
    {
      'type': 'string',
      'description': 'desc',
      'name': 'schema in EXT',
      'default': 'default',
      '__id': 'ext-dt-id-1'
    },
    {
      'type': 'string',
      'description': 'desc',
      'name': 'schema',
      'default': 'should overwrite',
      '__id': 'ext-dt-id-2'
    },
    {
      'type': 'string',
      'description': 'desc',
      'name': 'schema2',
      'default': 'should overwrite',
      '__id': 'ext-dt-id-3'
    },
    {
      'type': 'string',
      'description': 'desc',
      'name': 'schema in API',
      'default': 'default',
      '__id': 'api-dt-id-1'
    }
  ],
  'entityTypeName': 'api'
};