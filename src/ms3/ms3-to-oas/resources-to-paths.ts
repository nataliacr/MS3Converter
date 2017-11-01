import * as OAS from './../../oas/oas-20-api-interface';
import * as MS3 from './../ms3-v1-api-interface';
import { filter, find } from 'lodash';

class ConvertResourcesToPaths {
  constructor(private API: MS3.API) {}

  getDataTypeName(id: string): string {
    return find(this.API.dataTypes, ['__id', id]).name;
  }

  getExampleName(id: string): string {
    return find(this.API.examples, ['__id', id]).title;
  }

  getBodySchema(dataTypeID: string): OAS.ReferenceObject {
    const dataTypeName: string = this.getDataTypeName(dataTypeID);
    return {
      '$ref': `#/components/schemas/${dataTypeName}`
    };
  }

  getBodyExamples(examples: string[]): OAS.Example {
    return examples.reduce( (resultObject: OAS.Example, exampleID: string) => {
      const exampleName: string = this.getExampleName(exampleID);
      resultObject[exampleName] = {
        '$ref': `#/components/examples/${exampleName}`
      };

      return resultObject;
    }, {});
  }

  getRequestBody(body: MS3.Body[]): OAS.MediaType {
    return body.reduce( (resultObject: any, body: MS3.Body) => {
      resultObject[body.contentType] = {};

      if (body.type) resultObject[body.contentType].schema = this.getBodySchema(body.type);
      if (body.selectedExamples) resultObject[body.contentType].examples = this.getBodyExamples(body.selectedExamples);

      return resultObject;
    }, {});
  }

  getResponses(responses: MS3.Response[]): OAS.ResponsesObject {
    return responses.reduce((resultObject: any, response: MS3.Response) => {
      resultObject[response.code] = {
        description: response.description || 'description' // required field
      };

      if (response.body) resultObject[response.code].content = this.getRequestBody(response.body);

      return resultObject;
    }, {});
  }

  getParameters(method: MS3.Method): OAS.ParameterObject[] {
    const convertedParameters: object[] = [];

    if (method.headers) {
      method.headers.map( (header: MS3.Parameter) => {
        const convertedParameter: any = {
          name: header.displayName,
          in: 'header',
          required: header.required || false
        };

        if (header.description) convertedParameter.description = header.description;

        convertedParameters.push(convertedParameter);
      });
    }

    if (method.queryParameters) {
      method.queryParameters.map( (queryParameter: MS3.Parameter) => {
        const convertedParameter: any = {
          name: queryParameter.displayName,
          in: 'path',
          required: true
        };

        if (queryParameter.description) convertedParameter.description = queryParameter.description;

        convertedParameters.push(convertedParameter);
      });
    }

    return <OAS.ParameterObject[]> convertedParameters;
  }

  getMethodObject(method: MS3.Method, methodType: string, pathName: string): OAS.Operation {
    const resultObject: OAS.Operation = {
      operationId: `${pathName}_${methodType}`.toUpperCase(),
      responses: {} // required property
    };

    if (method.description) resultObject.description = method.description;
    if (method.body) resultObject.requestBody = { content: this.getRequestBody(method.body) };
    if (method.responses) resultObject.responses = this.getResponses(method.responses);
    if (method.headers || method.queryParameters) resultObject.parameters = this.getParameters(method);

    return resultObject;
  }

  convert(): OAS.Paths {
    return this.API.resources.reduce( (resultObject: any, resource: MS3.Resource) => {
      resultObject[resource.path] = {};

      const activeMethods = filter(resource.methods, ['active', true]);

      resultObject[resource.path] = activeMethods.reduce( (result: any, activeMethod: MS3.Method) => {
        const methodType = activeMethod.name.toLowerCase();
        result[methodType] = this.getMethodObject(activeMethod, methodType, resource.name);
        return result;
      }, {});

      return resultObject;
    }, {});
  }

  static create(api: MS3.API) {
    return new ConvertResourcesToPaths(api);
  }
}

export default function convertResourcesToPaths(API: MS3.API): OAS.Paths {
  return ConvertResourcesToPaths.create(API).convert();
}