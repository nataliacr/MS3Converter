import { cloneDeep, union, find } from 'lodash';
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

    if (this.api.annotationTypes && this.api.annotationTypes) mergedApi.annotationTypes = this.mergeArrayOfObjects(this.extension.annotationTypes, this.api.annotationTypes, 'name');
    if (!this.api.annotationTypes && this.api.annotationTypes) mergedApi.annotationTypes = this.api.annotationTypes;

    if (this.api.documentation && this.api.documentation) mergedApi.documentation = this.mergeArrayOfObjects(this.extension.documentation, this.api.documentation, 'name');
    if (!this.api.documentation && this.api.documentation) mergedApi.documentation = this.api.documentation;

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
    return apiObjectsArray.reduce( (resultArray: any[], apiObject: any, index: number) => {
      const duplicateInExtension = find(resultArray, [identifier, apiObject[identifier]]);
      if (!duplicateInExtension) resultArray.push(apiObject);
      else if (duplicateInExtension.annotations) resultArray[index].annotations = this.mergeArrayOfObjects(resultArray[index].annotations, apiObject.annotations, 'name');
      return resultArray;
    }, cloneDeep(extensionObjectsArray));
  }
}

export default function mergeExtensionWithApi(extension: MS3Extension): MS3.API {
  return MS3ExtensionToApi.create(extension).merge();
}