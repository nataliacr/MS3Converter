import { API as OAS } from '../oas-20-api-interface';
import * as MS3 from '../../ms3/ms3-v1-api-interface';
import ConvertorInterface from '../../common/convertor-interface';
import ConvertorOptions, { format } from '../../common/convertor-options-interface';

interface OAStoMS3Interface {
  ms3API: MS3.API;
  convert(): Promise<MS3.API>;
}

export default class OAStoMS3 implements OAStoMS3Interface, ConvertorInterface {
  ms3API: MS3.API;

  constructor(private oasApi: any, private options: ConvertorOptions) {}

  private convertInfo() {
    if (!this.oasApi.info) {
      throw new Error('Swagger API must contain info object.');
    }

    const { title, version, basePath, host } = this.oasApi.info;

    if (!title) {
      throw new Error('Swagger API info object must contain title.');
    }
    if (!version) {
      throw new Error('Swagger API info object must contain version.');
    }

    let baseUri: string = 'http://base.uri';
    if (basePath) baseUri = `${basePath}basePath`;

    const settings: any = {
      title,
      version,
    };

    return <MS3.Settings> settings;
  }

  private convertAPI(): MS3.API {
    const result: MS3.API = {
      entityTypeName: 'api',
      ms3_version: '1.0.0',
      settings: this.convertInfo()
    };
    return result;
  }

  async convert(): Promise<MS3.API> {
    const result = this.convertAPI();
    return result;
  }
}