import ConvertorInterface from '../common/convertor-interface';
import * as Ms3 from './ms3-v1-api-interface';

export default class MS3ToBlueprint implements ConvertorInterface {

  constructor (Ms3Api: Ms3.API, options: object = {}) {
  }

  convert() {
  }

  static create (MS3Api: Ms3.API, options: object) {
    return new MS3ToBlueprint(MS3Api, options);
  }
}