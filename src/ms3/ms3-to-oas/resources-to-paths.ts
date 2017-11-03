import { securitySchemeType } from '../../oas/oas-20-api-interface';
import * as OAS from './../../oas/oas-20-api-interface';
import * as MS3 from './../ms3-v1-api-interface';
import { filter, find, cloneDeep } from 'lodash';

class ConvertResourcesToPaths {
  constructor(private API: MS3.API) {}

  getSecuritySchemaByName(securitySchemeName: string): MS3.SecurityScheme {
    return find(this.API.securitySchemes, ['name', securitySchemeName]);
  }

  getParentResourcePath(id: string): string {
    return find(this.API.resources, ['__id', id]).path;
  }

  getDataTypeName(id: string): string {
    return find(this.API.dataTypes, (dataType: MS3.DataType) => {
      return (dataType.__id == id) && (dataType.type != 'nil');
    }).name;
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

  getResponseHeaders(headers: MS3.Parameter[]): OAS.Headers {
    return headers.reduce( (resultObject: any, header: MS3.Parameter) => {
      resultObject[header.displayName] = {
        required: header.required || true
      };

      if (header.description) resultObject[header.displayName].description = header.description;
      resultObject[header.displayName].schema = header.repeat ? this.getArrayTypeSchema(header) : this.getPrimitiveTypeSchema(header);
      delete resultObject[header.displayName].schema.name;
      delete resultObject[header.displayName].schema.in;

      return resultObject;
    }, {});
  }

  getResponses(responses: MS3.Response[]): OAS.ResponsesObject {
    return responses.reduce((resultObject: any, response: MS3.Response) => {
      resultObject[response.code] = {
        description: response.description || 'description' // required field
      };

      if (response.body) resultObject[response.code].content = this.getRequestBody(response.body);
      if (response.headers) resultObject[response.code].headers = this.getResponseHeaders(response.headers);

      return resultObject;
    }, {});
  }

  transformParameterObject(parameter: MS3.Parameter) {
    const clonedParameter: any = cloneDeep(parameter);
    delete clonedParameter.displayName;
    delete clonedParameter.description;
    delete clonedParameter.repeat;
    delete clonedParameter.required;
    delete clonedParameter.example;
    if (clonedParameter.type == 'number') clonedParameter.type = 'long';
    return clonedParameter;
  }

  getArrayTypeSchema(parameter: MS3.Parameter): OAS.SchemaObject {
    const convertedItems: any = this.transformParameterObject(parameter);
    return {
      type: 'array',
      items: convertedItems
    };
  }

  getPrimitiveTypeSchema(parameter: MS3.Parameter): OAS.SchemaObject {
    return this.transformParameterObject(parameter);
  }

  getParametersByType(parameters: MS3.Parameter[], type: string): OAS.ParameterObject[] {
    return parameters.map( (parameter: MS3.Parameter) => {
      const convertedParameter: any = {
        name: parameter.displayName,
        in: type,
        required: type == 'path' ? true : parameter.required || false
      };

      if (parameter.description) convertedParameter.description = parameter.description;
      convertedParameter.schema = parameter.repeat ? this.getArrayTypeSchema(parameter) : this.getPrimitiveTypeSchema(parameter);

      return convertedParameter;
    });
  }

  getParameters(method: MS3.Method): OAS.ParameterObject[] {
    let convertedParameters: OAS.ParameterObject[] = [];

    if (method.headers) convertedParameters = convertedParameters.concat(this.getParametersByType(method.headers, 'header'));
    if (method.queryParameters) convertedParameters = convertedParameters.concat(this.getParametersByType(method.queryParameters, 'path'));

    return convertedParameters;
  }

  getSecurityRequirement(securedBy: string[]): OAS.SecurityRequirement {
    return securedBy.reduce( (resultObject: any, secureByName: string) => {
      const securitySchema: MS3.SecurityScheme = this.getSecuritySchemaByName(secureByName);
      if (securitySchema.type != 'OAuth 2.0' && securitySchema.type != 'Basic Authentication') return resultObject;

      resultObject[secureByName] = [];
      return resultObject;
    }, {});
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
    if (method.securedBy) resultObject.security = this.getSecurityRequirement(method.securedBy);

    return resultObject;
  }

  convert(): OAS.Paths {
    return this.API.resources.reduce( (resultObject: any, resource: MS3.Resource) => {
      const path = resource.parentId ? (this.getParentResourcePath(resource.parentId) + resource.path) : resource.path;
      resultObject[path] = {};

      const activeMethods = filter(resource.methods, ['active', true]);

      resultObject[path] = activeMethods.reduce( (result: any, activeMethod: MS3.Method) => {
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