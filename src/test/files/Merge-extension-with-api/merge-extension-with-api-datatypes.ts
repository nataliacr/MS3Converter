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
          '__id': 'd0c35029-b545-4ce5-ba73-52b03910a382'
        },
        {
          'type': 'string',
          'description': 'desc',
          'name': 'schema',
          'default': 'should be overwriten',
          '__id': 'd0c35029-b545-4ce5-ba73-52b03910a382'
        },
        {
          'type': 'string',
          'description': 'desc',
          'name': 'schema2',
          'default': 'should be overwriten',
          '__id': 'd0c35029-b545-4ce5-ba73-52b03910a382'
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
      '__id': 'd0c35029-b545-4ce5-ba73-52b03910a382'
    },
    {
      'type': 'string',
      'description': 'desc',
      'name': 'schema',
      'default': 'should overwrite',
      '__id': 'd0c35029-b545-4ce5-ba73-52b03910a382'
    },
    {
      'type': 'string',
      'description': 'desc',
      'name': 'schema2',
      'default': 'should overwrite',
      '__id': 'd0c35029-b545-4ce5-ba73-52b03910a382'
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
      '__id': 'd0c35029-b545-4ce5-ba73-52b03910a382'
    },
    {
      'type': 'string',
      'description': 'desc',
      'name': 'schema',
      'default': 'should overwrite',
      '__id': 'd0c35029-b545-4ce5-ba73-52b03910a382'
    },
    {
      'type': 'string',
      'description': 'desc',
      'name': 'schema2',
      'default': 'should overwrite',
      '__id': 'd0c35029-b545-4ce5-ba73-52b03910a382'
    },
    {
      'type': 'string',
      'description': 'desc',
      'name': 'schema in API',
      'default': 'default',
      '__id': 'd0c35029-b545-4ce5-ba73-52b03910a382'
    }
  ],
  'entityTypeName': 'api'
};