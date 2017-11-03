import * as OAS from './../../oas/oas-20-api-interface';
import * as MS3 from './../ms3-v1-api-interface';
import {  } from 'lodash';

export function convertInlineExamples(examples: MS3.Example[]): OAS.Example {
  return examples.reduce( (resultObject: any, example: MS3.Example) => {
    resultObject[example.title] = { value: example.content };
    return resultObject;
  }, {});
}

export function convertExternalExampleReferences(examples: MS3.Example[], destinationPath: string): OAS.Example {
  return examples.reduce( (resultObject: any, example: MS3.Example) => {
    resultObject[example.title] = { externalValue: `./examples/${example.title}.${example.format}#${example.title}` };
    return resultObject;
  }, {});
}

export function convertExternalExamples(examples: MS3.Example[], destinationPath: string): object[] {
  return examples.map( (example: MS3.Example) => {
    return {
      content: {
        [example.title]: {
          value: example.content
        }
      },
      path: `${destinationPath}examples/${example.title}.${example.format}#${example.title}`
    };
  });
}