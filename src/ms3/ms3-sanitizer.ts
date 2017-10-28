import * as apiInerfaces from './ms3-v1-api-interface';
import { isNil, pickBy, isEqual, isArray } from 'lodash';

export default class MS3Sanitizer {
  private sanitizedAPI: apiInerfaces.API;

  constructor(private API: any) {}

  sanitize(): apiInerfaces.API {
    this.sanitizedAPI = {
      entityTypeName: this.API.entityTypeName,
      ms3_version: this.API.ms3_version,
      settings: this.sanitizeSettings()
    };

    return this.sanitizedAPI;
  }

  sanitizeObject(object: object): any {
    return pickBy(object, predicate => predicate && predicate.length);
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

  static create(api: any) {
    return new MS3Sanitizer(api);
  }
}