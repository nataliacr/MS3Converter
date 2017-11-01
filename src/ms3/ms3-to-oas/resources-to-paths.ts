import { Paths, ReferenceObject, MediaType, Example, ResponsesObject, Operation } from './../../oas/oas-20-api-interface';
import { API, Body, DataType, Resource, Response, Method } from './../ms3-v1-api-interface';
import { filter, find } from 'lodash';

class ConvertResourcesToPaths {
  constructor(private API: API) {}

  getDataTypeName(id: string): string {
    return find(this.API.dataTypes, ['__id', id]).name;
  }

  getExampleName(id: string): string {
    return find(this.API.examples, ['__id', id]).title;
  }

  getBodySchema(dataTypeID: string): ReferenceObject {
    const dataTypeName: string = this.getDataTypeName(dataTypeID);
    return {
      '$ref': `#/components/schemas/${dataTypeName}`
    };
  }

  getBodyExamples(examples: string[]): Example {
    return examples.reduce( (resultObject: Example, exampleID: string) => {
      const exampleName: string = this.getExampleName(exampleID);
      resultObject[exampleName] = {
        '$ref': `#/components/examples/${exampleName}`
      };

      return resultObject;
    }, {});
  }

  getRequestBody(body: Body[]): MediaType {
    return body.reduce( (resultObject: any, body: Body) => {
      resultObject[body.contentType] = {};

      if (body.type) resultObject[body.contentType].schema = this.getBodySchema(body.type);
      if (body.selectedExamples) resultObject[body.contentType].examples = this.getBodyExamples(body.selectedExamples);

      return resultObject;
    }, {});
  }

  getResponses(responses: Response[]): ResponsesObject {
    return responses.reduce((resultObject: any, response: Response) => {
      resultObject[response.code] = {
        description: response.description || 'description' // required field
      };

      if (response.body) resultObject[response.code].content = this.getRequestBody(response.body);

      return resultObject;
    }, {});
  }

  getMethodObject(method: any, methodType: string, pathName: string): Operation {
    const resultObject: Operation = {
      operationId: `${pathName}_${methodType}`.toUpperCase(),
      responses: {} // required property
    };

    if (method.description) resultObject.description = method.description;
    if (method.body) resultObject.requestBody = { content: this.getRequestBody(method.body) };
    if (method.responses) resultObject.responses = this.getResponses(method.responses);

    return resultObject;
  }

  convert(): Paths {
    return this.API.resources.reduce( (resultObject: any, resource: Resource) => {
      resultObject[resource.path] = {};

      const activeMethods = filter(resource.methods, ['active', true]);

      activeMethods.forEach(activeMethod => {
        const methodType = activeMethod.name.toLowerCase();
        resultObject[resource.path][methodType] = this.getMethodObject(activeMethod, methodType, resource.name);
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