import * as OAS from './../../oas/oas-20-api-interface';
import * as MS3 from './../ms3-v1-api-interface';
import { filter, find } from 'lodash';

class ConvertSecuritySchemes {
  constructor(private API: MS3.API) {}

  convert(): OAS.SecurityRequirement {
    return this.API.securitySchemes.reduce( (resultObject: any, securityScheme: MS3.SecurityScheme) => {

      return resultObject;
    }, {});
  }

  static create(api: MS3.API) {
    return new ConvertSecuritySchemes(api);
  }
}

export default function convertSecuritySchemes(API: MS3.API): OAS.SecurityRequirement {
  return ConvertSecuritySchemes.create(API).convert();
}