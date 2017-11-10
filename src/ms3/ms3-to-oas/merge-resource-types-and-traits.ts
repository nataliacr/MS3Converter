import Ms3Loader from '../loader';
import * as MS3 from '../ms3-v1-api-interface';
import { cloneDeep, find, filter, difference } from 'lodash';
import { Method } from '../ms3-v1-api-interface';

class MergeTypesAndTraits {
  constructor(private API: MS3.API) {}

  getTrait(name: string): MS3.Trait {
    return find(this.API.traits, ['name', name]);
  }

  getResourceType(name: string): MS3.ResourcesType {
    return find(this.API.resourcesTypes, ['name', name]);
  }

  mergeParameters(originalParameters: MS3.Parameter[], parametersFromType: MS3.Parameter[]): MS3.Parameter[] {
    return parametersFromType.reduce( (resultArray: MS3.Parameter[], resourceTypeParameter: MS3.Parameter) => {
      const existsInResource = filter(originalParameters, ['displayName', resourceTypeParameter.displayName]);
      if (!existsInResource.length) resultArray.push(resourceTypeParameter);
      return resultArray;
    }, [].concat(originalParameters));
  }

  mergeBody(originalBody: MS3.Body[], bodyFromType: MS3.Body[]): MS3.Body[] {
    return bodyFromType.reduce( (resultArray: MS3.Body[], resourceTypeBody: MS3.Body) => {
      const existsInResource = filter(originalBody, ['contentType', resourceTypeBody.contentType]);
      if (!existsInResource.length) resultArray.push(resourceTypeBody);
      return resultArray;
    }, [].concat(originalBody));
  }

  mergeTwoResponses(originalResoponse: MS3.Response, responseFromType: MS3.Response): MS3.Response {
    const mergedResponse = cloneDeep(originalResoponse);
    if (responseFromType.description && !originalResoponse.description) mergedResponse.description = responseFromType.description;
    if (responseFromType.headers) {
      if (!originalResoponse.headers) mergedResponse.headers = responseFromType.headers;
      else mergedResponse.headers = this.mergeParameters(originalResoponse.headers, responseFromType.headers);
    }
    if (responseFromType.body) {
      if (!originalResoponse.body) mergedResponse.body = responseFromType.body;
      else mergedResponse.body = this.mergeBody(originalResoponse.body, responseFromType.body);
    }
    return mergedResponse;
  }

  mergeResponses(originalResoponses: MS3.Response[], responsesFromType: MS3.Response[]): MS3.Response[] {
    return responsesFromType.reduce( (resultArray: MS3.Response[], resourceTypeResponse: MS3.Response) => {
      const existsInResource = filter(originalResoponses, ['code', resourceTypeResponse.code]);
      if (!existsInResource.length) {
        resultArray.push(resourceTypeResponse);
      } else {
        resultArray = difference(resultArray, existsInResource);
        resultArray = resultArray.concat(existsInResource.map( (originalResoponse: MS3.Response) => {
          return this.mergeTwoResponses(originalResoponse, resourceTypeResponse);
        }, this));
      }
      return resultArray;
    }, [].concat(originalResoponses));
  }

  mergeResourceType(resource: MS3.Resource): MS3.Resource {
    const mergedResource = cloneDeep(resource);
    const resourceType = this.getResourceType(resource.type);

    if (resourceType.description && !resource.description) mergedResource.description = resourceType.description;
    if (resourceType.methods) mergedResource.methods = this.mergeMethods(resourceType, resource.methods);

    return mergedResource;
  }

  mergeTwoMethods(originalMethod: any, methodFromType: any): any {
    const mergedMethod = cloneDeep(originalMethod);

    if (methodFromType.description && !originalMethod.description) mergedMethod.description = methodFromType.description;
    if (methodFromType.headers) {
      if (!originalMethod.headers) mergedMethod.headers = methodFromType.headers;
      else mergedMethod.headers = this.mergeParameters(originalMethod.headers, methodFromType.headers);
    }
    if (methodFromType.queryParameters) {
      if (!originalMethod.queryParameters) mergedMethod.queryParameters = methodFromType.queryParameters;
      else mergedMethod.queryParameters = this.mergeParameters(originalMethod.queryParameters, methodFromType.queryParameters);
    }
    if (methodFromType.body) {
      if (!originalMethod.body) mergedMethod.body = methodFromType.body;
      else mergedMethod.body = this.mergeBody(originalMethod.body, methodFromType.body);
    }
    if (methodFromType.responses) {
      if (!originalMethod.responses) mergedMethod.responses = methodFromType.responses;
      else mergedMethod.responses = this.mergeResponses(originalMethod.responses, methodFromType.responses);
    }

    return mergedMethod;
  }

  mergeMethods(resourceType: MS3.ResourcesType, methods: MS3.Method[]): MS3.Method[] {
    return resourceType.methods.reduce( (resultArray: MS3.Method[], resourceTypeMethod: MS3.Method) => {
      const originalMethod = find(methods, ['name', resourceTypeMethod.name]);

      if (originalMethod) resultArray.push(this.mergeTwoMethods(originalMethod, resourceTypeMethod));
      else resultArray.push(resourceTypeMethod);

      return resultArray;
    }, []);
  }

  mergeSelectedTraitsInMethods(method: MS3.Method): MS3.Method {
    let mergedMethod = cloneDeep(method);
    if (method.selectedTraits) {
      method.selectedTraits.forEach( (selectedTrait: string) => {
        const trait = this.getTrait(selectedTrait);
        mergedMethod = this.mergeTwoMethods(method, trait);
      }, this);
    }
    delete mergedMethod.selectedTraits;
    return mergedMethod;
  }

  mergeResourcesTypes(resource: MS3.Resource): MS3.Resource {
    let mergedResource = cloneDeep(resource);
    if (resource.type) mergedResource = this.mergeResourceType(resource);
    delete mergedResource.type;

    if (resource.methods) {
      if (resource.selectedTraits) {
        resource.selectedTraits.forEach( (selectedTrait: string) => {
          const trait = this.getTrait(selectedTrait);
          mergedResource.methods = mergedResource.methods.map( (method: MS3.Method) => {
            const result = this.mergeTwoMethods(method, trait);
            return result;
          }, this);
        }, this);
      }
      delete mergedResource.selectedTraits;
      mergedResource.methods = mergedResource.methods.map(this.mergeSelectedTraitsInMethods, this);
    }

    return mergedResource;
  }

  merge() {
    const mergedApi: MS3.API = cloneDeep(this.API);
    mergedApi.resources = mergedApi.resources.map(this.mergeResourcesTypes, this);

    delete mergedApi.resourcesTypes;
    delete mergedApi.traits;

    return mergedApi;
  }

  static create(api: MS3.API) {
    return new MergeTypesAndTraits(api);
  }
}

export default function mergeTypesAndTraits(API: MS3.API): MS3.API {
  return MergeTypesAndTraits.create(API).merge();
}