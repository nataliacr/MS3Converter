import { API as MS3 } from './ms3-v1-api-interface';
import { API as OAS, InfoObject } from './../oas/oas-20-api-interface';

interface MS3toOASInterface {
  ms3API: MS3;
  infoObject: object;
  convert(): OAS;
}

export default class MS3toOAS implements MS3toOASInterface {
  ms3API: MS3;
  infoObject: InfoObject;

  constructor(private api: MS3) {
    this.ms3API = api;
  }

  convert() {
    this.convertSettings();
    return this.composeApiParts();
  }

  private composeApiParts(): OAS {
    const API: OAS = {
      infoObject: this.infoObject
    };

    return API;
  }

  private convertSettings(): void {
    if (!this.ms3API.settings.title) {
      throw new Error('MS3 API settings must contain title property.');
    }

    const settings: InfoObject = {
      title: this.ms3API.settings.title,
      description: this.ms3API.settings.description,
      version: this.ms3API.settings.version
    };

    this.infoObject = settings;
  }

  static create(api: MS3) {
    return new MS3toOAS(api);
  }
}