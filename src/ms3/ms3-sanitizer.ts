import * as apiInerfaces from './ms3-v1-api-interface';
import { pickBy, isBoolean, isNumber } from 'lodash';

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

    return this.sanitizedAPI;
  }

  sanitizeObject(object: object): any {
    return pickBy(object, predicate => {
      return (predicate && predicate.length) || isBoolean(predicate) || isNumber(predicate);
    });
  }

  sanitizeArrayOfObjects(array: object[]): any {
    return array.map(this.sanitizeObject);
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

  sanitizeMethods(methods: object[]): apiInerfaces.Method[] {
    return methods.map( (method: any) => {
      const sanitizedMethod = this.sanitizeObject(method);
      if (sanitizedMethod.headers) sanitizedMethod.headers = this.sanitizeArrayOfObjects(sanitizedMethod.headers);
      if (sanitizedMethod.queryParameters) sanitizedMethod.queryParameters = this.sanitizeArrayOfObjects(sanitizedMethod.queryParameters);
      if (sanitizedMethod.annotations) sanitizedMethod.annotations = this.sanitizeAnnotations(sanitizedMethod.annotations);
      if (sanitizedMethod.body) {
        sanitizedMethod.body = sanitizedMethod.body.map( (body: any) => {
          const sanitizedBody = this.sanitizeObject(body);
          if (sanitizedBody.annotations) sanitizedBody.annotations = this.sanitizeAnnotations(sanitizedBody.annotations);
          return sanitizedBody;
        });
      }
      if (sanitizedMethod.responses) sanitizedMethod.responses = this.sanitizeMethods(sanitizedMethod.responses);
      return sanitizedMethod;
    });
  }

  static create(api: any) {
    return new MS3Sanitizer(api);
  }
}