import { cloneDeep, union, find, findIndex, intersection } from 'lodash';
import MS3Extension from './ms3-v1-extension-interface';
import * as MS3 from './ms3-v1-api-interface';

class MS3ExtensionToApi {
  api: any = {};
  IdsHash: any = {};

  constructor(private extension: MS3Extension) {
    this.api = extension.settings.extends;
  }

  static create(extension: MS3Extension) {
    return new MS3ExtensionToApi(extension);
  }

  merge(): MS3.API {
    let mergedApi: MS3.API = cloneDeep(this.api);

    // merge internal extension includes
    if (this.extension.libraries) {
      // merge library into extension
    }

    // merge internal api includes
    if (this.api.libraries) {
      // merge library into api
    }

    // merge api and extension together
    mergedApi = this.mergeExtensionIntoApi();

    return mergedApi;
  }

  mergeExtensionIntoApi(): MS3.API {
    const mergedApi: MS3.API = cloneDeep(this.api);

    mergedApi.settings = this.mergeSettings();

    if (this.api.examples && this.extension.examples) mergedApi.examples = this.mergeArrayOfObjects(this.extension.examples, this.api.examples, 'title');
    if (!this.api.examples && this.extension.examples) mergedApi.examples = this.extension.examples;

    if (this.api.dataTypes && this.extension.dataTypes) mergedApi.dataTypes = this.mergeArrayOfObjects(this.extension.dataTypes, this.api.dataTypes, 'name');
    if (!this.api.dataTypes && this.extension.dataTypes) mergedApi.dataTypes = this.extension.dataTypes;

    if (this.api.annotationTypes && this.extension.annotationTypes) mergedApi.annotationTypes = this.mergeArrayOfObjects(this.extension.annotationTypes, this.api.annotationTypes, 'name');
    if (!this.api.annotationTypes && this.extension.annotationTypes) mergedApi.annotationTypes = this.extension.annotationTypes;

    if (this.api.documentation && this.extension.documentation) mergedApi.documentation = this.mergeArrayOfObjects(this.extension.documentation, this.api.documentation, 'name');
    if (!this.api.documentation && this.extension.documentation) mergedApi.documentation = this.extension.documentation;

    if (this.api.traits && this.extension.traits) mergedApi.traits = this.mergeMethods(this.extension.traits, this.api.traits);
    if (!this.api.traits && this.extension.traits) mergedApi.traits = this.extension.traits;

    if (this.api.resources && this.extension.resources) mergedApi.resources = this.mergeResources(this.extension.resources, this.api.resources);
    if (!this.api.resources && this.extension.resources) mergedApi.resources = this.extension.resources;

    if (this.api.resourcesTypes && this.extension.resourcesTypes) mergedApi.resourcesTypes = this.mergeResources(this.extension.resourcesTypes, this.api.resourcesTypes);
    if (!this.api.resourcesTypes && this.extension.resourcesTypes) mergedApi.resourcesTypes = this.extension.resourcesTypes;

    if (this.api.securitySchemes && this.extension.securitySchemes) mergedApi.securitySchemes = this.mergeSecuritySchemes(this.extension.securitySchemes, this.api.securitySchemes);
    if (!this.api.securitySchemes && this.extension.securitySchemes) mergedApi.securitySchemes = this.extension.securitySchemes;

    return mergedApi;
  }

  mergeSettings(): MS3.Settings {
    const mergedSettings = cloneDeep(this.api.settings);
    const extensionSettings = this.extension.settings;
    const apiSettings = this.api.settings;

    if (extensionSettings.baseUri) mergedSettings.baseUri = extensionSettings.baseUri;
    if (extensionSettings.description) mergedSettings.description = extensionSettings.description;
    if (extensionSettings.mediaType) mergedSettings.mediaType = extensionSettings.mediaType;
    if (extensionSettings.title) mergedSettings.title = extensionSettings.title;
    if (extensionSettings.version) mergedSettings.version = extensionSettings.version;

    if (extensionSettings.protocols) mergedSettings.protocols = union(extensionSettings.protocols, apiSettings.protocols);
    if (extensionSettings.securedBy) mergedSettings.securedBy = union(extensionSettings.securedBy, apiSettings.securedBy);

    if (extensionSettings.annotations) mergedSettings.annotations = this.mergeArrayOfObjects(extensionSettings.annotations, apiSettings.annotations, 'name');
    if (extensionSettings.baseUriParameters) mergedSettings.baseUriParameters = this.mergeArrayOfObjects(extensionSettings.baseUriParameters, apiSettings.baseUriParameters, 'displayName');

    return mergedSettings;
  }

  mergeArrayOfObjects(extensionObjectsArray: any[], apiObjectsArray: any[], identifier: string): any[] {
    if (!apiObjectsArray) return extensionObjectsArray;
    return apiObjectsArray.reduce( (resultArray: any[], apiObject: any) => {
      const duplicateInExtension = find(resultArray, [identifier, apiObject[identifier]]);

      if (!duplicateInExtension) {
        resultArray.push(apiObject);
      } else if (duplicateInExtension.annotations) {
        const index = findIndex(resultArray, [identifier, apiObject[identifier]]);
        resultArray[index].annotations = this.mergeArrayOfObjects(resultArray[index].annotations, apiObject.annotations, 'name');
      }

      return resultArray;
    }, cloneDeep(extensionObjectsArray));
  }

  mergeBodies(extensionBodies: MS3.Body[], apiBodies: MS3.Body[]): MS3.Body[] {
    if (!apiBodies) return extensionBodies;
    return apiBodies.reduce( (resultArray: MS3.Body[], apiBody: MS3.Body) => {
      const duplicateInExtension = find(resultArray, ['contentType', apiBody.contentType]);

      if (!duplicateInExtension) {
        resultArray.push(apiBody);
      } else if (duplicateInExtension.annotations) {
        const index = findIndex(resultArray, ['contentType', apiBody.contentType]);
        resultArray[index] = this.mergeTwoBodies(resultArray[index], apiBody);
      }

      return resultArray;
    }, cloneDeep(extensionBodies));
  }

  mergeResources(extensionResources: any[], apiResources: any[]): any[] {
    return apiResources.reduce( (resultArray: any[], apiResource: any) => {
      const duplicateInExtension = find(resultArray, ['name', apiResource.name]);

      if (!duplicateInExtension) {
        resultArray.push(apiResource);
      } else {
        const index = findIndex(resultArray, ['name', apiResource.name]);
        resultArray[index] = this.mergeTwoResources(resultArray[index], apiResource);
      }

      return resultArray;
    }, cloneDeep(extensionResources));
  }

  mergeMethods(extensionMethods: any[], apiMethods: any[]): any[] {
    return apiMethods.reduce( (resultArray: any[], apiMethod: any) => {
      const duplicateInExtension = find(resultArray, ['name', apiMethod.name]);

      if (!duplicateInExtension) {
        resultArray.push(apiMethod);
      } else {
        const index = findIndex(resultArray, ['name', apiMethod.name]);
        resultArray[index] = this.mergeTwoMethods(resultArray[index], apiMethod);
      }

      return resultArray;
    }, cloneDeep(extensionMethods));
  }

  mergeTwoBodies(extenstionBody: MS3.Body, apiBody: MS3.Body): MS3.Body {
    const mergedBody = cloneDeep(apiBody);

    if (extenstionBody.annotations) mergedBody.annotations = this.mergeArrayOfObjects(extenstionBody.annotations, apiBody.annotations, 'name');

    if (extenstionBody.type && extenstionBody.type != apiBody.type) mergedBody.type = this.getSelectedId(extenstionBody.type, apiBody.type, 'dataTypes');
    if (extenstionBody.selectedExamples) mergedBody.selectedExamples = this.getSelectedIds(extenstionBody.selectedExamples, apiBody.selectedExamples, 'examples');

    return mergedBody;
  }

  mergeTwoResources(extenstionResource: any, apiResource: any): any {
    const mergedResource = cloneDeep(apiResource);

    if (extenstionResource.description) mergedResource.description = extenstionResource.description;

    if (extenstionResource.annotations) mergedResource.annotations = this.mergeArrayOfObjects(extenstionResource.annotations, apiResource.annotations, 'name');
    if (extenstionResource.pathVariables) mergedResource.pathVariables = this.mergeArrayOfObjects(extenstionResource.pathVariables, apiResource.pathVariables, 'displayName');

    if (extenstionResource.selectedTraits) mergedResource.selectedTraits = this.getSelectedIds(extenstionResource.selectedTraits, apiResource.selectedTraits, 'traits');
    if (extenstionResource.securedBy) mergedResource.securedBy = this.getSelectedIds(extenstionResource.securedBy, apiResource.securedBy, 'securedBy');

    if (extenstionResource.methods) {
      if (!apiResource.methods) mergedResource.methods = extenstionResource.methods;
      else mergedResource.methods = this.mergeMethods(extenstionResource.methods, apiResource.methods);
    }

    return mergedResource;
  }

  // In case of conflicting properties in extension and api
  // the id of component from api is the one to be in resulting ids array
  // (id of component from extenstion is being removed)
  getSelectedIds(extensionIds: string[], apiIds: string[], componentName: string): string[] {
    const apiComponents = apiIds.map( (id: string) => {
      const component: any = find(this.api[componentName], ['__id', id]);
      return component;
    }, this);

    const extensionComponents = extensionIds.map( (id: string) => {
      const component: any = find((<any>this.extension)[componentName], ['__id', id]);
      return component;
    }, this);

    const resultIds = apiIds;

    extensionComponents.forEach(extensionComponent => {
      let sameComponent: any = null;
      if (extensionComponent.name) sameComponent = find(apiComponents, ['name', extensionComponent.name]);
      if (extensionComponent.title) sameComponent = find(apiComponents, ['title', extensionComponent.title]);
      if (!sameComponent) resultIds.push(extensionComponent.__id);
    });

    return resultIds;
  }

  // In case of conflicting properties in extension and api
  // the id of component from api is the resulting id
  // otherwise extension component overwrites api component
  getSelectedId(extensionId: string, apiId: string, componentName: string): string {
    const apiComponent: any = find(this.api[componentName], ['__id', apiId]);
    const extensionComponent: any = find((<any>this.extension)[componentName], ['__id', extensionId]);

    if (apiComponent.name == extensionComponent.name) return apiId;
    else return extensionId;
  }

  mergeTwoMethods(extenstionMethod: any, apiMethod: any): any {
    const mergedMethod = cloneDeep(apiMethod);

    if (extenstionMethod.description) mergedMethod.description = extenstionMethod.description;

    if (extenstionMethod.selectedTraits) mergedMethod.selectedTraits = this.getSelectedIds(extenstionMethod.selectedTraits, apiMethod.selectedTraits, 'traits');
    if (extenstionMethod.securedBy) mergedMethod.securedBy = this.getSelectedIds(extenstionMethod.securedBy, apiMethod.securedBy, 'securedBy');

    if (extenstionMethod.annotations) mergedMethod.annotations = this.mergeArrayOfObjects(extenstionMethod.annotations, apiMethod.annotations, 'name');
    if (extenstionMethod.headers) {
      if (!apiMethod.headers) mergedMethod.headers = extenstionMethod.headers;
      else mergedMethod.headers = this.mergeArrayOfObjects(extenstionMethod.headers, apiMethod.headers, 'displayName');
    }
    if (extenstionMethod.queryParameters) {
      if (!apiMethod.queryParameters) mergedMethod.queryParameters = extenstionMethod.queryParameters;
      else mergedMethod.queryParameters = this.mergeArrayOfObjects(extenstionMethod.queryParameters, apiMethod.queryParameters, 'displayName');
    }

    if (extenstionMethod.body) {
      if (!apiMethod.body) mergedMethod.body = extenstionMethod.body;
      else mergedMethod.body = this.mergeBodies(extenstionMethod.body, apiMethod.body);
    }

    if (extenstionMethod.responses) {
      if (!apiMethod.responses) mergedMethod.responses = extenstionMethod.responses;
      else mergedMethod.responses = this.mergeResponses(extenstionMethod.responses, apiMethod.responses);
    }

    return mergedMethod;
  }

  mergeTwoSecuritySchemes(extenstionSecurityScheme: MS3.SecurityScheme, apiSecurityScheme: MS3.SecurityScheme): MS3.SecurityScheme {
    const mergedSecuritySchemes = cloneDeep(apiSecurityScheme);

    if (extenstionSecurityScheme.description) mergedSecuritySchemes.description = extenstionSecurityScheme.description;
    if (extenstionSecurityScheme.describedBy.headers) {
      if (!apiSecurityScheme.describedBy.headers) mergedSecuritySchemes.describedBy.headers = extenstionSecurityScheme.describedBy.headers;
      else mergedSecuritySchemes.describedBy.headers = this.mergeArrayOfObjects(extenstionSecurityScheme.describedBy.headers, apiSecurityScheme.describedBy.headers, 'displayName');
    }

    if (extenstionSecurityScheme.describedBy.queryParameters) {
      if (!apiSecurityScheme.describedBy.queryParameters) mergedSecuritySchemes.describedBy.queryParameters = extenstionSecurityScheme.describedBy.queryParameters;
      else mergedSecuritySchemes.describedBy.queryParameters = this.mergeArrayOfObjects(extenstionSecurityScheme.describedBy.queryParameters, apiSecurityScheme.describedBy.queryParameters, 'displayName');
    }

    if (extenstionSecurityScheme.describedBy.responses) {
      if (!apiSecurityScheme.describedBy.responses) mergedSecuritySchemes.describedBy.responses = extenstionSecurityScheme.describedBy.responses;
      else mergedSecuritySchemes.describedBy.responses = this.mergeResponses(extenstionSecurityScheme.describedBy.responses, apiSecurityScheme.describedBy.responses);
    }

    if (extenstionSecurityScheme.settings.accessTokenUri) mergedSecuritySchemes.settings.accessTokenUri = extenstionSecurityScheme.settings.accessTokenUri;
    if (extenstionSecurityScheme.settings.authorizationUri) mergedSecuritySchemes.settings.authorizationUri = extenstionSecurityScheme.settings.authorizationUri;
    if (extenstionSecurityScheme.settings.requestTokenUri) mergedSecuritySchemes.settings.requestTokenUri = extenstionSecurityScheme.settings.requestTokenUri;
    if (extenstionSecurityScheme.settings.tokenCredentialsUri) mergedSecuritySchemes.settings.tokenCredentialsUri = extenstionSecurityScheme.settings.tokenCredentialsUri;
    if (extenstionSecurityScheme.settings.authorizationGrants) mergedSecuritySchemes.settings.authorizationGrants = union(extenstionSecurityScheme.settings.authorizationGrants, apiSecurityScheme.settings.authorizationGrants);
    if (extenstionSecurityScheme.settings.scopes) mergedSecuritySchemes.settings.scopes = union(extenstionSecurityScheme.settings.scopes, apiSecurityScheme.settings.scopes);
    if (extenstionSecurityScheme.settings.signatures) mergedSecuritySchemes.settings.signatures = union(extenstionSecurityScheme.settings.signatures, apiSecurityScheme.settings.signatures);

    return mergedSecuritySchemes;
  }

  mergeResponses(extensionResponses: MS3.Response[], apiResponses: MS3.Response[]): MS3.Response[] {
    return apiResponses.reduce( (resultArray: MS3.Response[], apiResponse: MS3.Response) => {
      const duplicateInExtension = find(resultArray, ['code', apiResponse.code]);

      if (!duplicateInExtension) {
        resultArray.push(apiResponse);
      } else {
        const index = findIndex(resultArray, ['code', apiResponse.code]);
        resultArray[index] = this.mergeTwoMethods(resultArray[index], apiResponse);
      }

      return resultArray;
    }, cloneDeep(extensionResponses));
  }

  mergeSecuritySchemes(extensionSecuritySchemes: MS3.SecurityScheme[], apiSecuritySchemes: MS3.SecurityScheme[]): MS3.SecurityScheme[] {
    return apiSecuritySchemes.reduce( (resultArray: MS3.SecurityScheme[], apiSecurityScheme: MS3.SecurityScheme) => {
      const duplicateInExtension = find(resultArray, ['name', apiSecurityScheme.name]);

      if (!duplicateInExtension) {
        resultArray.push(apiSecurityScheme);
      } else {
        const index = findIndex(resultArray, ['name', apiSecurityScheme.name]);
        resultArray[index] = this.mergeTwoSecuritySchemes(resultArray[index], apiSecurityScheme);
      }

      return resultArray;
    }, cloneDeep(extensionSecuritySchemes));
  }
}

export default function mergeExtensionWithApi(extension: MS3Extension): MS3.API {
  return MS3ExtensionToApi.create(extension).merge();
}