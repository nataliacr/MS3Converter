import { API as MS3 } from './../../ms3/ms3-v1-api-interface';
import { API as OAS } from './../../oas/oas-20-api-interface';

export const originalExamples: MS3 = {
  'settings': {
    'title': 'params',
    'baseUri': 'http://params'
  },
  'ms3_version': '1.0.1',
  'entityTypeName': 'api',
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
      '__id': '855dd9bc-150c-44bd-a94a-b368f8857b6e'
    },
    {
      'title': 'exampleXML',
      'content': '<xml><example attr="hey">Some Value</example></xml>',
      'format': 'xml',
      '__id': 'b02085eb-b1c7-4189-9242-3ce91d6e8157'
    },
  ],
};

export const resultExamples: OAS = {
  openapi: '2.0',
  info: {
    title: 'params',
    description: 'API description',
    version: '2.0'
  },
  paths: {},
  components: {
    examples: {
      'exampleJSON': {
        value: '{"some": "example","name": "value"}'
      },
      'exampleTXT': {
        value: 'example in txt'
      },
      'exampleXML': {
        value: '<xml><example attr="hey">Some Value</example></xml>'
      }
    }
  }
};

export const resultExamplesWithReferences: OAS = {
  openapi: '2.0',
  info: {
    title: 'params',
    description: 'API description',
    version: '2.0'
  },
  paths: {},
  components: {
    examples: {
      'exampleJSON': {
        externalValue: './examples/exampleJSON.json#exampleJSON'
      },
      'exampleTXT': {
        externalValue: './examples/exampleTXT.txt#exampleTXT'
      },
      'exampleXML': {
        externalValue: './examples/exampleXML.xml#exampleXML'
      }
    }
  }
};