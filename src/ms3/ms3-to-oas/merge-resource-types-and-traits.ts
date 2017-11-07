import * as MS3 from '../ms3-v1-api-interface';
import { cloneDeep } from 'lodash';

class MergeTypesAndTraits {
  constructor(private API: MS3.API) {}

  mergeResourcesTypes(resource: MS3.Resource): MS3.Resource {
    return resource;
  }

  merge() {
    const mergedApi: MS3.API = cloneDeep(this.API);
    mergedApi.resources = mergedApi.resources.map(this.mergeResourcesTypes);
    return mergedApi;
  }

  static create(api: MS3.API) {
    return new MergeTypesAndTraits(api);
  }
}

export default function mergeTypesAndTraits(API: MS3.API): MS3.API {
  return MergeTypesAndTraits.create(API).merge();
}