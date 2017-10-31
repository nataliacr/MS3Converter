import * as ApiInterfaces from './../../ms3/ms3-v1-api-interface';

const originalProject = {
  settings: {
    title: 'params',
    baseUri: 'http://params'
  },
  ms3_version: '1.0.1',
  entityTypeName: 'api',
  dataTypes: [
    {
      type: 'string',
      name: 'string',
      default: 'dsdsd',
      __id: '895d4b86-2029-44d1-b35c-8400daedc45e'
    },
    {
      name: 'array of numbers',
      type: 'array',
      uniqueItems: false,
      items: {
        type: 'number',
        multipleOf: 3
      },
      __id: '56b0cc99-f79a-49cc-936d-c30ffad77a02'
    },
    {
      name: 'object',
      type: 'object',
      properties: [
        {
          name: 'default-1',
          type: 'array',
          uniqueItems: false,
          items: {
            type: 'string'
          }
        },
        {
          name: 'default-2',
          description: '',
          type: 'object',
          required: false,
          mode: 'form',
          properties: [
            {
              name: 'default-1',
              description: 'dddd',
              type: 'integer',
              required: false,
              mode: 'form',
              example: '',
              default: '',
              pattern: '',
              minLength: '',
              maxLength: '',
              format: '',
              minimum: '',
              maximum: '',
              maxProperties: '',
              minProperties: ''
            }
          ],
          example: '',
          default: '',
          pattern: '',
          minLength: '',
          maxLength: '',
          format: '',
          minimum: '',
          maximum: '',
          maxProperties: '',
          minProperties: ''
        }
      ],
      __id: '2422df32-35e0-4363-bcbb-c23d6d6dba22',
      maxItems: '',
      minItems: ''
    }
  ]
};

const resultProject: ApiInterfaces.API = {
  settings: {
    title: 'params',
    baseUri: 'http://params'
  },
  ms3_version: '1.0.1',
  entityTypeName: 'api',
  dataTypes: [
    {
      type: 'string',
      name: 'string',
      default: 'dsdsd',
      __id: '895d4b86-2029-44d1-b35c-8400daedc45e'
    },
    {
      name: 'array of numbers',
      type: 'array',
      uniqueItems: false,
      items: {
        type: 'number',
        multipleOf: 3
      },
      __id: '56b0cc99-f79a-49cc-936d-c30ffad77a02'
    },
    {
      name: 'object',
      type: 'object',
      properties: [
        {
          name: 'default-1',
          type: 'array',
          uniqueItems: false,
          items: {
            type: 'string'
          }
        },
        {
          name: 'default-2',
          type: 'object',
          required: false,
          properties: [
            {
              name: 'default-1',
              description: 'dddd',
              type: 'integer',
              required: false
            }
          ]
        }
      ],
      __id: '2422df32-35e0-4363-bcbb-c23d6d6dba22'
    }
  ]
};

export { originalProject, resultProject };