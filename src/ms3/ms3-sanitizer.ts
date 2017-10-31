import { SecurityScheme } from './ms3-v1-api-interface';
import * as apiInerfaces from './ms3-v1-api-interface';
import { pickBy, isBoolean, isNumber, keys } from 'lodash';

export default class MS3Sanitizer {
  private sanitizedAPI: apiInerfaces.API;

  constructor(private API: any) {}

  sanitize(): apiInerfaces.API {
    this.sanitizedAPI = {
      entityTypeName: this.API.entityTypeName,
      ms3_version: this.API.ms3_version,
      settings: this.sanitizeSettings()
    };

    if (this.API.folder && this.API.folder.length) this.sanitizedAPI.folder = this.API.folder;
    if (this.API.dataTypes && this.API.dataTypes.length) this.sanitizedAPI.dataTypes = this.sanitizeDataTypes(this.API.dataTypes);
    if (this.API.resources && this.API.resources.length) this.sanitizedAPI.resources = this.sanitizeResources(this.API.resources);
    if (this.API.securitySchemes && this.API.securitySchemes.length) this.sanitizedAPI.securitySchemes = this.sanitizeSecuritySchemes(this.API.securitySchemes);
    if (this.API.resourcesTypes && this.API.resourcesTypes.length) this.sanitizedAPI.resourcesTypes = this.sanitizeResources(this.API.resourcesTypes);
    if (this.API.traits && this.API.traits.length) this.sanitizedAPI.traits = this.sanitizeTraits(this.API.traits);

    return this.sanitizedAPI;
  }

  sanitizeObject(object: object): any {
    return pickBy(object, predicate => {
      return (predicate && predicate.length) || isBoolean(predicate) || isNumber(predicate) || (keys(predicate).length != 0);
    });
  }

  sanitizeArrayOfObjects(array: object[]): any {
    return array.map(this.sanitizeObject);
  }

  sanitizeBody(body: object[]): apiInerfaces.Body[] {
    return body.map( (body: object) => {
      const sanitizedBody: apiInerfaces.Body = this.sanitizeObject(body);
      if (sanitizedBody.annotations) sanitizedBody.annotations = this.sanitizeAnnotations(sanitizedBody.annotations);
      return sanitizedBody;
    });
  }

  sanitizeSettings(): apiInerfaces.Settings {
    const sanitizedSettings: apiInerfaces.Settings = this.sanitizeObject(this.API.settings);
    if (sanitizedSettings.baseUriParameters) sanitizedSettings.baseUriParameters = this.sanitizeArrayOfObjects(this.API.settings.baseURIParameters);
    if (sanitizedSettings.annotations) sanitizedSettings.annotations = this.sanitizeAnnotations(this.API.settings.annotations);

    return sanitizedSettings;
  }

  sanitizeAnnotations(annotations: object[]): apiInerfaces.Annotation[] {
    return annotations.map( annotation => {
      const sanitizedAnnotation = this.sanitizeObject(annotation);
      if (sanitizedAnnotation.properties) {
        sanitizedAnnotation.properties = this.sanitizeArrayOfObjects(sanitizedAnnotation.properties);
      }
      return sanitizedAnnotation;
    });
  }

  sanitizeDataTypes(dataTypes: object[]): apiInerfaces.DataType[] {
    return dataTypes.map( (dataType: any) => {
      const sanitizedDataType = this.sanitizeObject(dataType);
      if (sanitizedDataType.properties) {
        sanitizedDataType.properties = this.sanitizeDataTypes(sanitizedDataType.properties);
      }
      if (dataType.items) {
        sanitizedDataType.items = this.sanitizeObject(dataType.items);
      }
      delete sanitizedDataType.mode; // TODO: Remove this after 'mode' property is removed from ms3 format
      return sanitizedDataType;
    });
  }

  sanitizeResources(resources: object[]): apiInerfaces.Resource[] {
    return resources.map( (resource: any) => {
      const sanitizedResource = this.sanitizeObject(resource);
      if (sanitizedResource.pathVariables) sanitizedResource.pathVariables = this.sanitizeArrayOfObjects(sanitizedResource.pathVariables);
      if (sanitizedResource.annotations) sanitizedResource.annotations = this.sanitizeAnnotations(sanitizedResource.annotations);
      if (sanitizedResource.methods) sanitizedResource.methods = this.sanitizeMethods(sanitizedResource.methods);
      return sanitizedResource;
    });
  }

  sanitizeMethod(method: object): object {
    const sanitizedMethod = this.sanitizeObject(method);
    if (sanitizedMethod.headers) sanitizedMethod.headers = this.sanitizeArrayOfObjects(sanitizedMethod.headers);
    if (sanitizedMethod.queryParameters) sanitizedMethod.queryParameters = this.sanitizeArrayOfObjects(sanitizedMethod.queryParameters);
    if (sanitizedMethod.annotations) sanitizedMethod.annotations = this.sanitizeAnnotations(sanitizedMethod.annotations);
    if (sanitizedMethod.body) sanitizedMethod.body = this.sanitizeBody(sanitizedMethod.body);
    if (sanitizedMethod.responses) sanitizedMethod.responses = this.sanitizeMethods(sanitizedMethod.responses);
    return sanitizedMethod;
  }

  sanitizeMethods(methods: object[]): apiInerfaces.Method[] {
    return methods.map( (method) => <apiInerfaces.Method> this.sanitizeMethod(method) );
  }

  sanitizeTraits(traits: object[]): apiInerfaces.Trait[] {
    return traits.map( (trait) => <apiInerfaces.Trait> this.sanitizeMethod(trait) );
  }

  sanitizeSecuritySchemes(securitySchemes: object[]): apiInerfaces.SecurityScheme[] {
    return securitySchemes.map( (securityScheme: any) => {
      const sanitizedSecurityScheme: apiInerfaces.SecurityScheme = this.sanitizeObject(securityScheme);
      if (sanitizedSecurityScheme.describedBy) sanitizedSecurityScheme.describedBy = this.sanitizeObject(sanitizedSecurityScheme.describedBy);
      if (sanitizedSecurityScheme.describedBy.headers) sanitizedSecurityScheme.describedBy.headers = this.sanitizeArrayOfObjects(sanitizedSecurityScheme.describedBy.headers);
      if (sanitizedSecurityScheme.describedBy.queryParameters) sanitizedSecurityScheme.describedBy.queryParameters = this.sanitizeArrayOfObjects(sanitizedSecurityScheme.describedBy.queryParameters);
      if (sanitizedSecurityScheme.describedBy.responses) {
        sanitizedSecurityScheme.describedBy.responses = sanitizedSecurityScheme.describedBy.responses.map( (response: object) => {
          const sanitizedResponse: apiInerfaces.Response = this.sanitizeObject(response);
          if (sanitizedResponse.headers) sanitizedResponse.headers = this.sanitizeArrayOfObjects(sanitizedResponse.headers);
          if (sanitizedResponse.body) sanitizedResponse.body = this.sanitizeBody(sanitizedResponse.body);
          return sanitizedResponse;
        });
      }
      if (sanitizedSecurityScheme.annotations) sanitizedSecurityScheme.annotations = this.sanitizeAnnotations(sanitizedSecurityScheme.annotations);
      if (sanitizedSecurityScheme.settings) sanitizedSecurityScheme.settings = this.sanitizeObject(sanitizedSecurityScheme.settings);
      return sanitizedSecurityScheme;
    });
  }

  static create(api: any) {
    return new MS3Sanitizer(api);
  }
}