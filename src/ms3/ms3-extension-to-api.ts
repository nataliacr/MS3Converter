import { cloneDeep, union, find, findIndex } from 'lodash';
import MS3Extension from './ms3-v1-extension-interface';
import * as MS3 from './ms3-v1-api-interface';

class MS3ExtensionToApi {
  api: any = {};

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

  mergeTwoResources(extenstionResource: any, apiResource: any): any {
    const mergedResource = cloneDeep(apiResource);

    if (extenstionResource.description) mergedResource.description = extenstionResource.description;
    if (extenstionResource.annotations) mergedResource.annotations = this.mergeArrayOfObjects(extenstionResource.annotations, apiResource.annotations, 'name');
    if (extenstionResource.selectedTraits) mergedResource.selectedTraits = union(extenstionResource.selectedTraits, apiResource.selectedTraits);
    if (extenstionResource.securedBy) mergedResource.securedBy = union(extenstionResource.securedBy, apiResource.securedBy);
    if (extenstionResource.pathVariables) mergedResource.pathVariables = this.mergeArrayOfObjects(extenstionResource.pathVariables, apiResource.pathVariables, 'displayName');
    if (extenstionResource.methods) {
      if (!apiResource.methods) mergedResource.methods = extenstionResource.methods;
      else mergedResource.methods = this.mergeMethods(extenstionResource.methods, apiResource.methods);
    }

    return mergedResource;
  }

  mergeTwoMethods(extenstionMethod: any, apiMethod: any): any {
    const mergedMethod = cloneDeep(apiMethod);

    if (extenstionMethod.description) mergedMethod.description = extenstionMethod.description;
    if (extenstionMethod.annotations) mergedMethod.annotations = this.mergeArrayOfObjects(extenstionMethod.annotations, apiMethod.annotations, 'name');
    if (extenstionMethod.selectedTraits) mergedMethod.selectedTraits = union(extenstionMethod.selectedTraits, apiMethod.selectedTraits);
    if (extenstionMethod.securedBy) mergedMethod.securedBy = union(extenstionMethod.securedBy, apiMethod.securedBy);
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
      else mergedMethod.body = this.mergeArrayOfObjects(extenstionMethod.body, apiMethod.body, 'contentType');
    }
    if (extenstionMethod.responses) {
      if (!apiMethod.responses) mergedMethod.responses = extenstionMethod.responses;
      else mergedMethod.responses = this.mergeResponses(extenstionMethod.responses, apiMethod.responses);
    }

    return mergedMethod;
  }

  mergeResponses(extensionResponses: MS3.Response[], apiResoponses: MS3.Response[]): MS3.Response[] {
    return apiResoponses.reduce( (resultArray: MS3.Response[], apiResoponse: MS3.Response) => {
      const duplicateInExtension = find(resultArray, ['code', apiResoponse.code]);

      if (!duplicateInExtension) {
        resultArray.push(apiResoponse);
      } else {
        const index = findIndex(resultArray, ['code', apiResoponse.code]);
        resultArray[index] = this.mergeTwoMethods(resultArray[index], apiResoponse);
      }

      return resultArray;
    }, cloneDeep(extensionResponses));
  }
}

export default function mergeExtensionWithApi(extension: MS3Extension): MS3.API {
  return MS3ExtensionToApi.create(extension).merge();
}