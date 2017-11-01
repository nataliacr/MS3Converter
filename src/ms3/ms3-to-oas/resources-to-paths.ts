import { Paths, ReferenceObject, MediaType, Example } from './../../oas/oas-20-api-interface';
import { API, Body, DataType, Resource } from './../ms3-v1-api-interface';
import { filter, find } from 'lodash';

class ConvertResourcesToPaths {
  constructor(private API: API) {}

  getDataTypeName(id: string): string {
    return find(this.API.dataTypes, ['__id', id]).name;
  }

  getExampleName(id: string): string {
    return find(this.API.examples, ['__id', id]).title;
  }

  getBodySchema(dataType: string): ReferenceObject {
    const dataTypeName: string = this.getDataTypeName(dataType);
    return {
      '$ref': `#/components/schemas/${dataTypeName}` // TODO: get DataType name by ID
    };
  }

  getBodyExamples(examples: string[]): Example {
    return examples.reduce( (resultObject: Example, example: string) => {
      const exampleName: string = this.getExampleName(example);
      resultObject = {
        [exampleName]: {
          '$ref': `#/components/examples/${exampleName}` // TODO: get Example name by ID
        }
      };
      return resultObject;
    }, {});
  }

  getRequestBody(body: Body[]): MediaType {
    return body.reduce( (resultObject: any, body: Body) => {
      resultObject = {
        [body.contentType]: {}
      };

      if (body.type) resultObject[body.contentType].schema = this.getBodySchema(body.type);
      if (body.selectedExamples) resultObject[body.contentType].examples = this.getBodyExamples(body.selectedExamples);

      return resultObject;
    }, {});
  }

  convert(): Paths {
    return this.API.resources.reduce( (resultObject: any, resource: Resource) => {
      resultObject[resource.path] = {};

      const activeMethods = filter(resource.methods, ['active', true]);

      activeMethods.forEach(activeMethod => {
        const methodType = activeMethod.name.toLowerCase();

        resultObject[resource.path][methodType] = {
          operationId: `${resource.name}_${methodType}`.toUpperCase(),
          responses: {} // required property
        };

        if (activeMethod.description) resultObject[resource.path][methodType].description = activeMethod.description;
        if (activeMethod.body) resultObject[resource.path][methodType].requestBody = { content: this.getRequestBody(activeMethod.body) };
      });

      return resultObject;
    }, {});
  }

  static create(api: API) {
    return new ConvertResourcesToPaths(api);
  }
}

export default function convertResourcesToPaths(API: API): Paths {
  return ConvertResourcesToPaths.create(API).convert();
}