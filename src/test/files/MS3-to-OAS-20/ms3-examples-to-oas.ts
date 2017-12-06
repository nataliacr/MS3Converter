import * as MS3Interface from '../../../ms3/ms3-v1-api-interface';
import * as OASInterface from '../../../oas/oas-20-api-interface';

export const ms3Examples: MS3Interface.API = {
  settings: {
    title: 'params',
    baseUri: 'http://params',
  },
  ms3_version: '1.0.1',
  entityTypeName: 'api',
  'examples': [
    {
      'title': 'exampleJSON',
      'content': '{"some": "example","name": "value"}',
      'format': 'json',
      '__id': '855dd9bc-150c-44bd-a94a-b368f8857b6e'
    },
    {
      'title': 'exampleTXT',
      'content': 'example in txt',
      'format': 'txt',
      '__id': '865dd9bc-150c-44bd-a94a-b368f8857b6e'
    },
    {
      'title': 'exampleXML',
      'content': '<xml><example attr="hey">Some Value</example></xml>',
      'format': 'xml',
      '__id': 'b02085eb-b1c7-4189-9242-3ce91d6e8157'
    },
  ]
};

export const oasExamples: OASInterface.API = {
  swagger: '2.0',
  info: {
    title: 'params',
    version: '2.0'
  },
  host: 'params',
  basePath: '/',
  paths: {}
};