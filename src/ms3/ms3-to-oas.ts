import { API as MS3 } from './ms3-v1-api-interface';
import { API as OAS, InfoObject } from './../oas/oas-20-api-interface';

interface MS3toOASInterface {
  oasAPI: OAS;
  convert(): OAS;
}

export default class MS3toOAS implements MS3toOASInterface {
  oasAPI: OAS;

  constructor(private ms3API: MS3) {}

  convert(): OAS {
    this.oasAPI.infoObject = this.convertSettings();
    return this.oasAPI;
  }

  private convertSettings(): InfoObject {
    if (!this.ms3API.settings.title) {
      throw new Error('MS3 API settings must contain title property.');
    }

    const settings: InfoObject = {
      title: this.ms3API.settings.title,
      description: this.ms3API.settings.description,
      version: this.ms3API.settings.version
    };

    return settings;
  }

  static create(api: MS3) {
    return new MS3toOAS(api);
  }
}