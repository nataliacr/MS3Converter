import * as OAS from '../../../oas/oas-20-api-interface';
import * as MS3 from '../../ms3-v1-api-interface';
import { securitySchemeType } from '../../../oas/oas-30-api-interface';
import { filter, find, cloneDeep } from 'lodash';

class ConvertResourcesToPaths {
  constructor(private API: MS3.API, private asSingleFile: boolean) {}

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
      '$ref': `#/definitions/${dataTypeName}`
    };
  }

  // getBodyExamples(examples: string[]): OAS.ExampleObject {
  //   return examples.reduce( (resultObject: OAS.ExampleObject, exampleID: string) => {
  //     const exampleName: string = this.getExampleName(exampleID);
  //     resultObject[exampleName] = {
  //       '$ref': `./examples/${exampleName}.json#${exampleName}`
  //     };

  //     return resultObject;
  //   }, {});
  // }

  // getRequestBody(body: MS3.Body[]): OAS.SchemaObject {
  //   return body.reduce( (resultObject: any, body: MS3.Body) => {
  //     resultObject[body.contentType] = {};

  //     if (body.type) resultObject[body.contentType].schema = this.getBodySchema(body.type);
  //     if (body.selectedExamples) resultObject[body.contentType].examples = this.getBodyExamples(body.selectedExamples);

  //     return resultObject;
  //   }, {});
  // }

  getResponseHeaders(headers: MS3.Parameter[]): OAS.HeadersObject {
    return headers.reduce( (resultObject: any, header: MS3.Parameter) => {
      resultObject[header.displayName] = this.transformParameterObject(header);
      return resultObject;
    }, {});
  }

  getResponseExamples(selectedExamples: string[]): any {
    if (this.asSingleFile) {
      // inline
    }
    else {
      return selectedExamples.reduce((resultExamples: any, selectedExample: string) => {
        const exampleName = this.getExampleName(selectedExample);
        resultExamples[exampleName] = {
          '$ref': `./examples/${exampleName}.json#${exampleName}`
        };
        return resultExamples;
      }, {});
    }
  }

  getResponses(responses: MS3.Response[]): OAS.ResponsesObject {
    return responses.reduce((resultObject: any, response: MS3.Response) => {
      resultObject[response.code] = {
        description: response.description || 'description' // required field
      };

      if (response.body && response.body.length && response.body[0].type) {
        resultObject[response.code].schema = {
          '$ref': `#/definitions/${this.getDataTypeName(response.body[0].type)}`
        };
        const examples = response.body.forEach(body => {
          if (response.body[0].selectedExamples) {
            resultObject[response.code].examples = this.getResponseExamples(body.selectedExamples);
          }
        });
      }
      if (response.headers) resultObject[response.code].headers = this.getResponseHeaders(response.headers);

      return resultObject;
    }, {});
  }

  transformParameterObject(parameter: MS3.Parameter) {
    const clonedParameter: any = cloneDeep(parameter);
    delete clonedParameter.displayName;
    delete clonedParameter.repeat;
    delete clonedParameter.example;
    delete clonedParameter.required;

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
      let convertedParameter: any = {
        name: parameter.displayName,
        in: type
      };

      const parameterProperties = this.transformParameterObject(parameter);

      if (parameter.repeat) {
        convertedParameter = {
          ...convertedParameter,
          type: 'array',
          items: parameterProperties
        };
        if (parameterProperties.description) convertedParameter.description = parameterProperties.description;
        delete convertedParameter.items.description;
      }
      else {
        convertedParameter = {
          ...convertedParameter,
          ...parameterProperties
        };
      }

      return convertedParameter;
    });
  }

  getBodyParameter(body: MS3.Body): OAS.ParameterObject[] {
    const schemaName = this.getDataTypeName(body.type);
    const convertedBody: any = {
      name: schemaName,
      in: 'body',
      schema: {
        '$ref': `#/definitions/${schemaName}`
      }
    };

    return convertedBody;
  }

  getParameters(method: MS3.Method): OAS.ParameterObject[] {
    let convertedParameters: OAS.ParameterObject[] = [];

    if (method.headers) convertedParameters = convertedParameters.concat(this.getParametersByType(method.headers, 'header'));
    if (method.queryParameters) convertedParameters = convertedParameters.concat(this.getParametersByType(method.queryParameters, 'query'));
    if (method.body && method.body.length && method.body[0].type) convertedParameters = convertedParameters.concat(this.getBodyParameter(method.body[0]));

    return convertedParameters;
  }

  getSecurityRequirement(securedBy: string[]): OAS. SecurityRequirementObject[] {
    return securedBy.reduce( (resultArray: any, securedByName: string) => {
      const securitySchema: MS3.SecurityScheme = this.getSecuritySchemaByName(securedByName);

      if (securitySchema.type == 'OAuth 2.0') {
        resultArray.push({
          [securedByName]: securitySchema.settings.scopes
        });
      }
      if (securitySchema.type == 'Basic Authentication') {
        resultArray.push({
          [securedByName]: []
        });
      }

      return resultArray;
    }, []);
  }

  getMethodObject(method: MS3.Method, methodType: string, pathName: string): OAS.OperationObject {
    const resultObject: OAS.OperationObject = {
      operationId: `${pathName}_${methodType}`.toUpperCase(),
      responses: {} // required property
    };

    if (method.description) resultObject.description = method.description;
    if (method.responses) resultObject.responses = this.getResponses(method.responses);
    if (method.body || method.headers || method.queryParameters) resultObject.parameters = this.getParameters(method);
    if (method.securedBy) resultObject.security = this.getSecurityRequirement(method.securedBy);

    return resultObject;
  }

  convert(): OAS.Paths {
    return this.API.resources.reduce( (resultObject: any, resource: MS3.Resource) => {
      const path = resource.parentId ? (this.getParentResourcePath(resource.parentId) + resource.path) : resource.path;
      resultObject[path] = {};
      // base uri params and resource path params
      const activeMethods = filter(resource.methods, ['active', true]);

      resultObject[path] = activeMethods.reduce( (result: any, activeMethod: MS3.Method) => {
        const methodType = activeMethod.name.toLowerCase();
        result[methodType] = this.getMethodObject(activeMethod, methodType, resource.name);
        return result;
      }, {});

      return resultObject;
    }, {});
  }

  static create(api: MS3.API, asSingleFile: boolean) {
    return new ConvertResourcesToPaths(api, asSingleFile);
  }
}

export default function convertResourcesToPaths(API: MS3.API, asSingleFile: boolean = true): OAS.Paths {
  return ConvertResourcesToPaths.create(API, asSingleFile).convert();
}