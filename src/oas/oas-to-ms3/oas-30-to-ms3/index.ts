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
      settings: this.convertSettings()
    };

    return this.ms3API;
  }

  convertSettings() {
    const info = this.oasAPI.info;

    const settings: MS3Interface.Settings = {
      title: info.title,
      baseUri: 'http://base.uri',
      version: info.version
    };

    if (info.description) settings.description = info.description;

    return settings;
  }
}

export default function convertOAS30toMS3(oasAPI: OAS30Interface.API): any {
  return MS3toOAS30toMS3.create(oasAPI).convert();
}