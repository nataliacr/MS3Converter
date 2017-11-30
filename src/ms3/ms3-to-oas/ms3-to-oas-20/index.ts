import { API as MS3Interface } from '../../../ms3/ms3-v1-api-interface';
import { API as OAS20Interface } from '../../../oas/oas-20-api-interface';

class MS3toOAS20 {
  oasAPI: OAS20Interface;

  constructor(private ms3API: MS3Interface) {}

  static create(ms3API: MS3Interface) {
    return new MS3toOAS20(ms3API);
  }

  convert() {
    return this.oasAPI;
  }
}

export default function convertOAS20(ms3API: MS3Interface): OAS20Interface {
  return MS3toOAS20.create(ms3API).convert();
}