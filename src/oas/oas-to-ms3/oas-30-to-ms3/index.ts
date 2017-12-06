import * as MS3Interface from '../../../ms3/ms3-v1-api-interface';
import * as OAS30Interface from '../../../oas/oas-30-api-interface';

class MS3toOAS30toMS3 {
  ms3API: MS3Interface.API;

  constructor(private oasAPI: OAS30Interface.API) {}

  static create(oasAPI: OAS30Interface.API) {
    return new MS3toOAS30toMS3(oasAPI);
  }

  convert() {
    this.ms3API = {
      entityTypeName: 'api',
      ms3_version: '1.0',
      settings: {
        title: 'title',
        baseUri: 'baseuri'
      }
    };

    return this.ms3API;
  }
}

export default function convertOAS30toMS3(oasAPI: OAS30Interface.API): any {
  return MS3toOAS30toMS3.create(oasAPI).convert();
}