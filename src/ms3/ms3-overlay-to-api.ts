import { cloneDeep, union, find, findIndex, intersection } from 'lodash';
import MS3Overlay from './ms3-v1-overlay-interface';
import * as MS3 from './ms3-v1-api-interface';
import { MS3ExtensionToApi } from './ms3-extension-to-api';
import mergeLibraryToMs3 from './merge-library-to-ms3';

class MS3OverlayToApi extends MS3ExtensionToApi {
  api: any = {};

  constructor(private overlay: MS3Overlay) {
    super(overlay);
  }

  getExamples() { return this.overlay.examples; }

  getDataTypes() { return this.overlay.dataTypes; }

  getAnnotationTypes() { return this.overlay.annotationTypes; }

  getDocumentation() { return this.overlay.documentation; }

  getTraits() { return this.overlay.traits; }

  getResources() { return this.overlay.resources; }

  getResourcesTypes() { return this.overlay.resourcesTypes; }

  getSecuritySchemes() { return this.overlay.securitySchemes; }

  getSettings() { return this.overlay.settings; }

  getComponentByPropertyName(componentName: string) { return (<any>this.overlay)[componentName]; }

  merge(): MS3.API {
    let mergedApi: MS3.API = cloneDeep(this.api);

    if (this.api.libraries) {
      this.api = mergeLibraryToMs3(this.api);
    }

    if (this.overlay.libraries) {
      this.overlay = <MS3Overlay> mergeLibraryToMs3(this.overlay);
    }

    mergedApi = this.mergeExtensionIntoApi();

    return mergedApi;
  }

  mergeSettings(): MS3.Settings {
    const mergedSettings = cloneDeep(this.api.settings);
    const overlaySettings = this.getSettings();
    const apiSettings = this.api.settings;

    if (overlaySettings.description) mergedSettings.description = overlaySettings.description;
    if (overlaySettings.title) mergedSettings.title = overlaySettings.title;
    if (overlaySettings.annotations) mergedSettings.annotations = this.mergeArrayOfObjects(overlaySettings.annotations, apiSettings.annotations, 'name');

    return mergedSettings;
  }

  mergeResources(overlayResources: any[], apiResources: any[]): any[] {
    return apiResources.map( (apiBody: any, index: number) => {
      return this.mergeTwoResources(overlayResources[index], apiBody);
    });
  }

  mergeBodies(overlayBodies: MS3.Body[], apiBodies: MS3.Body[]): MS3.Body[] {
    return apiBodies.map( (apiBody: any, index: number) => {
      return this.mergeTwoBodies(overlayBodies[index], apiBody);
    });
  }

  mergeMethods(overlayMethods: any[], apiMethods: any[]): any[] {
    return apiMethods.map( (apiMethod: any, index: number) => {
      return this.mergeTwoMethods(overlayMethods[index], apiMethod);
    });
  }

  mergeResponses(overlayResponses: MS3.Response[], apiResponses: MS3.Response[]): MS3.Response[] {
    return apiResponses.map( (apiResponses: any, index: number) => {
      return this.mergeTwoMethods(overlayResponses[index], apiResponses);
    });
  }

  mergeSecuritySchemes(overlaySecuritySchemes: MS3.SecurityScheme[], apiSecuritySchemes: MS3.SecurityScheme[]): MS3.SecurityScheme[] {
    return apiSecuritySchemes.map( (apiSecurityScheme: any, index: number) => {
      return this.mergeTwoSecuritySchemes(overlaySecuritySchemes[index], apiSecurityScheme);
    });
  }

  mergeTwoResources(extenstionResource: any, apiResource: any): any {
    const mergedResource = cloneDeep(apiResource);

    if (extenstionResource.description) mergedResource.description = extenstionResource.description;
    if (extenstionResource.annotations) mergedResource.annotations = this.mergeArrayOfObjects(extenstionResource.annotations, apiResource.annotations, 'name');
    if (extenstionResource.methods) mergedResource.methods = this.mergeMethods(extenstionResource.methods, apiResource.methods);

    return mergedResource;
  }

  mergeTwoMethods(overlayMethod: any, apiMethod: any): any {
    const mergedMethod = cloneDeep(apiMethod);

    if (overlayMethod.description) mergedMethod.description = overlayMethod.description;
    if (overlayMethod.annotations) mergedMethod.annotations = this.mergeArrayOfObjects(overlayMethod.annotations, apiMethod.annotations, 'name');
    if (overlayMethod.body) mergedMethod.body = this.mergeBodies(overlayMethod.body, apiMethod.body);
    if (overlayMethod.responses) mergedMethod.responses = this.mergeResponses(overlayMethod.responses, apiMethod.responses);

    return mergedMethod;
  }

  mergeTwoSecuritySchemes(extenstionSecurityScheme: MS3.SecurityScheme, apiSecurityScheme: MS3.SecurityScheme): MS3.SecurityScheme {
    const mergedSecuritySchemes = cloneDeep(apiSecurityScheme);

    if (extenstionSecurityScheme.description) mergedSecuritySchemes.description = extenstionSecurityScheme.description;
    if (extenstionSecurityScheme.describedBy.responses) mergedSecuritySchemes.describedBy.responses = this.mergeResponses(extenstionSecurityScheme.describedBy.responses, apiSecurityScheme.describedBy.responses);

    return mergedSecuritySchemes;
  }
}

export default function mergeOverlayWithApi(overlay: MS3Overlay): MS3.API {
  return MS3OverlayToApi.create(overlay).merge();
}