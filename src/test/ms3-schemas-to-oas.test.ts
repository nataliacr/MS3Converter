import MS3toOAS from './../ms3/ms3-to-oas/index';
import * as ApiInterfaces from './../ms3/ms3-v1-api-interface';
import * as OASInterfaces from './../oas/oas-20-api-interface';

const project: ApiInterfaces.API = {
  settings: {
    title: 'params',
    baseUri: 'http://params',
  },
  dataTypes: [
    {
      'name': 'ObjectSchema',
      'type': 'object',
      'properties': [
        {
          'name': 'StringProperty',
          'type': 'string',
          'description': 'Description here',
          'example': 'Terry',
          'default': 'Ted',
          'pattern': 'Pattern Here',
          'minLength': 3,
          'maxLength': 10,
          'enum': [
            'Ted',
            'Bob'
          ],
          'required': true
        },
        {
          'name': 'BooleanProperty',
          'type': 'boolean',
          'description': 'Description here',
          'example': false,
          'default': true,
          'required': true
        }
      ],
      '__id': 'b204580e-7b57-44b4-85fd-075fca5d68c8'
    },
    {
      'name': 'ArraySchema',
      'type': 'array',
      'example': '13',
      'maxItems': 1,
      'minItems': 1,
      'uniqueItems': true,
      'items': {
        'type': 'integer',
        'description': '1',
        'example': 3,
        'default': 2,
        'format': 'int32',
        'minimum': 1,
        'maximum': 3,
        'multipleOf': 12
      },
      '__id': 'c6710947-1eed-472d-a4f3-c4807c24fe6b'
    }
  ],
  ms3_version: '1.0.1',
  entityTypeName: 'api'
};

test('MS3 schemas should be converted to OAS successfully', async() => {
  const expectedResult: OASInterfaces.API = {
    openapi: '2.0',
    info: {
      title: 'params',
      description: 'API description',
      version: '2.0'
    },
    paths: {},
    components: {
      schemas: {
        'name': {
          'title': 'hello'
        }
      }
    }
  };
  await expect(MS3toOAS.create(project).convert()).resolves.toEqual(expectedResult);
});
