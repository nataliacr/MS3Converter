import { Paths, ReferenceObject, MediaType, Example } from './../../oas/oas-20-api-interface';
import { Body, DataType, Resource } from './../ms3-v1-api-interface';
import { filter } from 'lodash';

function getBodySchema(dataType: string): ReferenceObject {
  return {
    '$ref': `#/components/schemas/${dataType}` // TODO: get DataType name by ID
  };
}

function getBodyExamples(examples: string[]): Example {
  console.log(examples);
  return examples.reduce( (resultObject: Example, example: string) => {
    resultObject = {
      [example]: {
        '$ref': `#/components/examples/${example}` // TODO: get Example name by ID
      }
    };
    return resultObject;
  }, {});
}

function getRequestBody(body: Body[]): MediaType {
  return body.reduce( (resultObject: any, body: Body) => {
    resultObject = {
      [body.contentType]: {}
    };

    if (body.type) resultObject[body.contentType].schema = getBodySchema(body.type);
    if (body.selectedExamples) resultObject[body.contentType].examples = getBodyExamples(body.selectedExamples);

    return resultObject;
  }, {});
}

export default function convertPathObjects(resources: Resource[]): Paths {
  return resources.reduce( (resultObject: any, resource: Resource) => {
    resultObject[resource.path] = {};

    const activeMethods = filter(resource.methods, ['active', true]);

    activeMethods.forEach(activeMethod => {
      const methodType = activeMethod.name.toLowerCase();

      resultObject[resource.path][methodType] = {
        operationId: `${resource.name}_${methodType}`.toUpperCase(),
        responses: {} // required property
      };

      if (activeMethod.description) resultObject[resource.path][methodType].description = activeMethod.description;
      if (activeMethod.body) resultObject[resource.path][methodType].requestBody = { content: getRequestBody(activeMethod.body) };
    });

    // console.log(resultObject);

    return resultObject;
  }, {});
}