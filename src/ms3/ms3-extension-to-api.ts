import { cloneDeep, union, find, findIndex, intersection } from 'lodash';
import MS3Extension from './ms3-v1-extension-interface';
import * as MS3 from './ms3-v1-api-interface';

export class MS3ExtensionToApi {
  api: any = {};
  IdsHash: any = {
    examples: {},
    dataTypes: {},
    annotationTypes: {},
    securitySchemes: {},
    traits: {},
    resourcesTypes: {}
  };

  constructor(private extension: MS3Extension) {
    this.api = extension.settings.extends;
  }

  getExamples() { return this.extension.examples; }

  getDataTypes() { return this.extension.dataTypes; }

  getAnnotationTypes() { return this.extension.annotationTypes; }

  getDocumentation() { return this.extension.documentation; }

  getTraits() { return this.extension.traits; }

  getResources() { return this.extension.resources; }

  getResourcesTypes() { return this.extension.resourcesTypes; }

  getSecuritySchemes() { return this.extension.securitySchemes; }

  getSettings() { return this.extension.settings; }

  getComponentByPropertyName(componentName: string) { return (<any>this.extension)[componentName]; }

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

    if (this.api.examples && this.getExamples()) mergedApi.examples = this.mergeExamples(this.getExamples(), this.api.examples);
    if (!this.api.examples && this.getExamples()) mergedApi.examples = this.getExamples();

    if (this.api.dataTypes && this.getDataTypes()) mergedApi.dataTypes = this.mergeDataTypes(this.getDataTypes(), this.api.dataTypes);
    if (!this.api.dataTypes && this.getDataTypes()) mergedApi.dataTypes = this.getDataTypes();

    if (this.api.annotationTypes && this.getAnnotationTypes()) mergedApi.annotationTypes = this.mergeAnnotationTypes(this.getAnnotationTypes(), this.api.annotationTypes);
    if (!this.api.annotationTypes && this.getAnnotationTypes()) mergedApi.annotationTypes = this.getAnnotationTypes();

    if (this.api.documentation && this.getDocumentation()) mergedApi.documentation = this.mergeArrayOfObjects(this.getDocumentation(), this.api.documentation, 'name');
    if (!this.api.documentation && this.getDocumentation()) mergedApi.documentation = this.getDocumentation();

    if (this.api.traits && this.getTraits()) mergedApi.traits = this.mergeTraits(this.getTraits(), this.api.traits);
    if (!this.api.traits && this.getTraits()) mergedApi.traits = this.getTraits();

    if (this.api.resourcesTypes && this.getResourcesTypes()) mergedApi.resourcesTypes = this.mergeResources(this.getResourcesTypes(), this.api.resourcesTypes);
    if (!this.api.resourcesTypes && this.getResourcesTypes()) mergedApi.resourcesTypes = this.getResourcesTypes();

    if (this.api.resources && this.getResources()) mergedApi.resources = this.mergeResources(this.getResources(), this.api.resources);
    if (!this.api.resources && this.getResources()) mergedApi.resources = this.getResources();

    if (this.api.securitySchemes && this.getSecuritySchemes()) mergedApi.securitySchemes = this.mergeSecuritySchemes(this.getSecuritySchemes(), this.api.securitySchemes);
    if (!this.api.securitySchemes && this.getSecuritySchemes()) mergedApi.securitySchemes = this.getSecuritySchemes();

    return mergedApi;
  }

  mergeSettings(): MS3.Settings {
    const mergedSettings = cloneDeep(this.api.settings);
    const extensionSettings = this.getSettings();
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

  mergeExamples(extensionExamples: any[], apiExamples: any[]): any[] {
    if (!apiExamples) return extensionExamples;

    return apiExamples.reduce((resultExamples: any[], apiExample: any) => {
      const conflictingExamples = find(resultExamples, ['title', apiExample.title]);

      if (!conflictingExamples) {
        resultExamples.push(apiExample);
      } else {
        const index = findIndex(resultExamples, ['title', apiExample.title]);
        this.IdsHash.examples = {
          ...this.IdsHash.examples,
          [apiExample.__id]: resultExamples[index].__id
        };
        if (conflictingExamples.annotations) {
          resultExamples[index].annotations = this.mergeArrayOfObjects(resultExamples[index].annotations, apiExample.annotations, 'name');
        }
      }

      return resultExamples;
    }, cloneDeep(extensionExamples));
  }

  mergeDataTypes(extensionDataTypes: any[], apiDataTypes: any[]): any[] {
    if (!apiDataTypes) return extensionDataTypes;

    return apiDataTypes.reduce((resultDataTypes: any[], apiDataType: any) => {
      const conflictingDataType = find(resultDataTypes, ['name', apiDataType.name]);

      if (!conflictingDataType) {
        resultDataTypes.push(apiDataType);
      } else {
        const index = findIndex(resultDataTypes, ['name', apiDataType.name]);
        this.IdsHash.examples = {
          ...this.IdsHash.dataTypes,
          [apiDataType.__id]: resultDataTypes[index].__id
        };
      }

      return resultDataTypes;
    }, cloneDeep(extensionDataTypes));
  }

  mergeAnnotationTypes(extensionAnnotationTypes: any[], apiAnnotationTypes: any[]): any[] {
    if (!apiAnnotationTypes) return extensionAnnotationTypes;

    return apiAnnotationTypes.reduce((resultAnnotationTypes: any[], apiAnnotationType: any) => {
      const conflictingAnnotationType = find(resultAnnotationTypes, ['name', apiAnnotationType.name]);

      if (!conflictingAnnotationType) {
        resultAnnotationTypes.push(apiAnnotationType);
      } else {
        const index = findIndex(resultAnnotationTypes, ['name', apiAnnotationType.name]);
        this.IdsHash.annotationTypes = {
          ...this.IdsHash.annotationTypes,
          [apiAnnotationType.__id]: resultAnnotationTypes[index].__id
        };
      }

      return resultAnnotationTypes;
    }, cloneDeep(extensionAnnotationTypes));
  }

  mergeTraits(extensionTraits: any[], apiTraits: any[]): any[] {
    if (!apiTraits) return extensionTraits;

    return apiTraits.reduce((resultTraits: any[], apiTrait: any) => {
      const conflictingTrait = find(resultTraits, ['name', apiTrait.name]);

      if (!conflictingTrait) {
        resultTraits.push(this.resolveMethodReferences(apiTrait));
      } else {
        const index = findIndex(resultTraits, ['name', apiTrait.name]);
        this.IdsHash.traits = {
          ...this.IdsHash.traits,
          [apiTrait.__id]: resultTraits[index].__id
        };
        if (conflictingTrait.annotations) {
          resultTraits[index].annotations = this.mergeArrayOfObjects(resultTraits[index].annotations, apiTrait.annotations, 'name');
        }
      }

      return resultTraits;
    }, cloneDeep(extensionTraits));
  }

  mergeResourcesTypes(extensionResourcesTypes: any[], apiResourcesTypes: any[]): any[] {
    if (!apiResourcesTypes) return extensionResourcesTypes;

    return apiResourcesTypes.reduce((resultResourcesTypes: any[], apiResourcesType: any) => {
      const conflictingResourcesType = find(resultResourcesTypes, ['name', apiResourcesType.title]);

      if (!conflictingResourcesType) {
        resultResourcesTypes.push(this.resolveResourcesTypeReferences(apiResourcesType));
      } else {
        const index = findIndex(resultResourcesTypes, ['name', apiResourcesType.name]);
        this.IdsHash.resourcesTypes = {
          ...this.IdsHash.resourcesTypes,
          [apiResourcesType.__id]: resultResourcesTypes[index].__id
        };
        if (conflictingResourcesType.annotations) {
          resultResourcesTypes[index].annotations = this.mergeArrayOfObjects(resultResourcesTypes[index].annotations, apiResourcesType.annotations, 'name');
        }
      }

      return resultResourcesTypes;
    }, cloneDeep(extensionResourcesTypes));
  }

  mergeArrayOfObjects(extensionObjectsArray: any[], apiObjectsArray: any[], identifier: string): any[] {
    if (!apiObjectsArray) return extensionObjectsArray;
    return apiObjectsArray.reduce((resultArray: any[], apiObject: any) => {
      const duplicateInExtension = find(resultArray, [identifier, apiObject[identifier]]);

      if (!duplicateInExtension) {
        resultArray.push(apiObject);
      } else {
        const index = findIndex(resultArray, [identifier, apiObject[identifier]]);
        if (duplicateInExtension.annotations) {
          resultArray[index].annotations = this.mergeArrayOfObjects(resultArray[index].annotations, apiObject.annotations, 'name');
        }
      }

      return resultArray;
    }, cloneDeep(extensionObjectsArray));
  }

  mergeBodies(extensionBodies: MS3.Body[], apiBodies: MS3.Body[]): MS3.Body[] {
    if (!apiBodies) return extensionBodies;
    return apiBodies.reduce((resultArray: MS3.Body[], apiBody: MS3.Body) => {
      const duplicateInExtension = find(resultArray, ['contentType', apiBody.contentType]);

      if (!duplicateInExtension) {
        resultArray.push(apiBody);
      } else {
        const index = findIndex(resultArray, ['contentType', apiBody.contentType]);
        resultArray[index] = this.mergeTwoBodies(resultArray[index], apiBody);
      }

      return resultArray;
    }, cloneDeep(extensionBodies));
  }

  mergeResources(extensionResources: any[], apiResources: any[]): any[] {
    return apiResources.reduce((resultArray: any[], apiResource: any) => {
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

  resolveResourcesTypeReferences(resourcesType: any): any {
    const newResourcesType = cloneDeep(resourcesType);

    if (resourcesType.annotations) newResourcesType.annotations = this.resolveSelectedIds(resourcesType.annotations, 'annotationTypes');
    if (resourcesType.selectedTraits) newResourcesType.selectedTraits = this.resolveSelectedIds(resourcesType.selectedTraits, 'traits');
    if (resourcesType.securedBy) newResourcesType.securedBy = this.resolveSelectedIds(resourcesType.securedBy, 'securitySchemes');
    if (resourcesType.methods) newResourcesType.methods = resourcesType.methods.map( (method: any) => {
      return this.resolveMethodReferences(method);
    }, this);

    return newResourcesType;
  }

  resolveMethodReferences(method: any): any {
    const newMethod = cloneDeep(method);

    if (method.body) {
      newMethod.body = method.body.map((body: any) => {
        const newBody: any = cloneDeep(body);
        if (body.selectedExamples) newBody.selectedExamples = this.resolveSelectedIds(body.selectedExamples, 'examples');
        if (body.type) newBody.type = this.resolveSelectedId(body.type);
        return newBody;
      }, this);
    }
    if (method.selectedTraits) newMethod.selectedTraits = this.resolveSelectedIds(method.selectedTraits, 'traits');
    if (method.securedBy) newMethod.securedBy = this.resolveSelectedIds(method.securedBy, 'securitySchemes');
    if (method.annotations) newMethod.annotations = this.resolveSelectedIds(method.annotations, 'annotationTypes');
    if (method.responses) newMethod.responses = method.responses.map((response: any) => {
      const newResponse = cloneDeep(response);
      if (response.annotations) newResponse.annotations = this.resolveSelectedIds(response.annotations, 'annotationTypes');

      if (response.body) {
        newResponse.body = response.body.map((body: any) => {
          const newBody: any = cloneDeep(body);
          if (body.selectedExamples) newBody.selectedExamples = this.resolveSelectedIds(body.selectedExamples, 'examples');
          if (body.type) newBody.type = this.resolveSelectedId(body.type);
          return newBody;
        }, this);
      }

      return newResponse;
    }, this);

    return newMethod;
  }

  mergeMethods(extensionMethods: any[], apiMethods: any[]): any[] {
    return apiMethods.reduce((resultArray: any[], apiMethod: any) => {
      const duplicateInExtension = find(resultArray, ['name', apiMethod.name]);

      if (!duplicateInExtension) {
        resultArray.push(this.resolveMethodReferences(apiMethod));
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

    if (extenstionBody.type && extenstionBody.type != apiBody.type) mergedBody.type = this.mergeSelectedId(extenstionBody.type, apiBody.type, 'dataTypes');
    if (extenstionBody.selectedExamples) mergedBody.selectedExamples = this.mergeSelectedIds(extenstionBody.selectedExamples, apiBody.selectedExamples, 'examples');

    return mergedBody;
  }

  mergeTwoResources(extenstionResource: any, apiResource: any): any {
    const mergedResource = cloneDeep(apiResource);

    if (extenstionResource.description) mergedResource.description = extenstionResource.description;

    if (extenstionResource.annotations) mergedResource.annotations = this.mergeArrayOfObjects(extenstionResource.annotations, apiResource.annotations, 'name');
    if (extenstionResource.pathVariables) mergedResource.pathVariables = this.mergeArrayOfObjects(extenstionResource.pathVariables, apiResource.pathVariables, 'displayName');

    if (extenstionResource.selectedTraits) mergedResource.selectedTraits = this.mergeSelectedIds(extenstionResource.selectedTraits, apiResource.selectedTraits, 'traits');
    if (extenstionResource.securedBy) mergedResource.securedBy = this.mergeSelectedIds(extenstionResource.securedBy, apiResource.securedBy, 'securitySchemes');

    if (extenstionResource.methods) {
      if (!apiResource.methods) mergedResource.methods = extenstionResource.methods;
      else mergedResource.methods = this.mergeMethods(extenstionResource.methods, apiResource.methods);
    }

    return mergedResource;
  }

  mergeSelectedIds(extensionIds: string[], apiIds: string[], componentName: string): string[] {
    const newExtenstionIds: string[] = extensionIds.map((extensionId: string) => {
      return this.IdsHash[componentName][extensionId] ? this.IdsHash[componentName][extensionId] : extensionId;
    }, this);

    const newApiIds: string[] = apiIds.map((apiId: string) => {
      return this.IdsHash[componentName][apiId] ? this.IdsHash[componentName][apiId] : apiId;
    }, this);

    return union(newExtenstionIds, newApiIds);
  }

  resolveSelectedIds(apiIds: string[], componentName: string): string[] {
    return apiIds.map((apiId: string) => {
      return this.IdsHash[componentName][apiId] ? this.IdsHash[componentName][apiId] : apiId;
    }, this);
  }

  resolveSelectedId(apiId: string): string {
    return this.IdsHash.dataTypes[apiId] ? this.IdsHash.dataTypes[apiId] : apiId;
  }

  mergeSelectedId(extensionId: string, apiId: string, componentName: string): string {
    const apiComponent: any = find(this.api[componentName], ['__id', apiId]);
    const extensionComponent: any = find(this.getComponentByPropertyName(componentName), ['__id', extensionId]);

    if (apiComponent.name == extensionComponent.name) return apiId;
    else return extensionId;
  }

  mergeTwoMethods(extenstionMethod: any, apiMethod: any): any {
    const mergedMethod = cloneDeep(apiMethod);

    if (extenstionMethod.description) mergedMethod.description = extenstionMethod.description;

    if (extenstionMethod.selectedTraits) mergedMethod.selectedTraits = this.mergeSelectedIds(extenstionMethod.selectedTraits, apiMethod.selectedTraits, 'traits');
    if (extenstionMethod.securedBy) mergedMethod.securedBy = this.mergeSelectedIds(extenstionMethod.securedBy, apiMethod.securedBy, 'securitySchemes');

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
    return apiResponses.reduce((resultArray: MS3.Response[], apiResponse: MS3.Response) => {
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
    return apiSecuritySchemes.reduce((resultArray: MS3.SecurityScheme[], apiSecurityScheme: MS3.SecurityScheme) => {
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