import * as MS3Interface from '../../../ms3/ms3-v1-api-interface';
import * as OAS30Interface from '../../../oas/oas-30-api-interface';

import { reduce, filter } from 'lodash';
import { v4 } from 'uuid';

class MS3toOAS30toMS3 {
  ms3API: MS3Interface.API;

  constructor(private oasAPI: OAS30Interface.API) {}

  static create(oasAPI: OAS30Interface.API) {
    return new MS3toOAS30toMS3(oasAPI);
  }

  convert() {
    this.ms3API = {
      entityTypeName: 'api',
      ms3_version: '1.0',
      settings: this.convertSettings(),
      resources: this.convertPaths()
    };

    return this.ms3API;
  }

  convertSettings() {
    const info = this.oasAPI.info;

    const settings: MS3Interface.Settings = {
      title: info.title,
      baseUri: 'http://base.uri',
      version: info.version
    };

    if (info.description) settings.description = info.description;

    return settings;
  }

  convertOperations(operations: OAS30Interface.PathItemObject | any): MS3Interface.Method[] {
    const methodsKeys = ['get', 'post', 'put', 'delete', 'options', 'head', 'patch'];

    return methodsKeys.reduce((methodsArray: any[], methodKey: string) => {
      const operation: OAS30Interface.Operation = operations[methodKey];
      if (!operation) return methodsArray;

      const method: MS3Interface.Method = this.convertOpertation(operation, methodKey);
      methodsArray.push(method);

      return methodsArray;
    }, []);
  }

  convertOpertation(operation: OAS30Interface.Operation, name: string): MS3Interface.Method {
    const method: MS3Interface.Method = {
      name: name.toUpperCase(),
      active: true
    };

    if (operation.description) method.description = operation.description;
    const parameters: any = this.getParameters(operation.parameters);

    if (parameters.queryParameters) method.queryParameters = parameters.queryParameters;
    if (parameters.headers) method.headers = parameters.headers;
    if (operation.requestBody) method.body = this.convertRequestBody(<OAS30Interface.RequestBodyObject>operation.requestBody);

    return method;
  }

  convertRequestBody(requestBody: OAS30Interface.RequestBodyObject): MS3Interface.Body[] {
    return reduce(requestBody.content, (resultArray: any, value: any, key: string) => {
      const convertedBody: MS3Interface.Body = {
         contentType: <MS3Interface.contentType>key
      };

      if (value.schema.$ref) {
        const splitArr: string[] = value.schema.$ref.split('/');
        const name: string = splitArr.pop();
        convertedBody.type = name;
      }
      else {
        // push schemas to datatypes
        convertedBody.type = value.schema.name;
      }

      resultArray.push(convertedBody);

      return resultArray;
    }, []);
  }

  getParameters(parameters: OAS30Interface.ParameterObject[]): any {
    const query: OAS30Interface.ParameterObject[] = filter(parameters, ['in', 'query']);
    const header: OAS30Interface.ParameterObject[] = filter(parameters, ['in', 'header']);

    const convertedParameters: any = {};

    if (query && query.length) convertedParameters.queryParameters = this.convertParameters(query);
    if (header && header.length) convertedParameters.headers = this.convertParameters(header);

    return convertedParameters;
  }

  convertParameters(parameters: OAS30Interface.ParameterObject[]) {
    return parameters.map((parameter) => {
      const convertedParameter: MS3Interface.Parameter = {
        displayName: parameter.name,
        type: 'string' // default
      };

      if (parameter.description) convertedParameter.description = parameter.description;
      if (parameter.required) convertedParameter.required = parameter.required;

      if (parameter.schema) {
        const schema: any = parameter.schema;
        if (schema.pattern) convertedParameter.pattern = schema.pattern;
        if (schema.default) convertedParameter.default = schema.default;
        if (schema.maxLength) convertedParameter.maxLength = schema.maxLength;
        if (schema.minLength) convertedParameter.minLength = schema.minLength;
        if (schema.minimum) convertedParameter.minimum = schema.minimum;
        if (schema.maximum) convertedParameter.maximum = schema.maximum;
        if (schema.enum) convertedParameter.enum = schema.enum;
        if (schema.type) {
          if (schema.type == 'array' && schema.items && schema.items.type) {
          convertedParameter.type = schema.items.type;
          convertedParameter.repeat = true;
        } else {
          convertedParameter.type = schema.type;
          }
        }
      }

      return convertedParameter;
    });
  }

  convertPaths() {
    return reduce(this.oasAPI.paths, (resultResources: any, pathValue: OAS30Interface.PathItemObject, pathKey: string) => {
      const resource: MS3Interface.Resource = {
        __id: v4(),
        path: pathKey,
        methods: this.convertOperations(pathValue)
      };

      if (pathValue.description) resource.description = pathValue.description;

      resultResources.push(resource);

      return resultResources;
    }, []);
  }
}

export default function convertOAS30toMS3(oasAPI: OAS30Interface.API): any {
  return MS3toOAS30toMS3.create(oasAPI).convert();
}