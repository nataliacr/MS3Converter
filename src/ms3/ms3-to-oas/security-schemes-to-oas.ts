import * as OAS from './../../oas/oas-20-api-interface';
import * as MS3 from './../ms3-v1-api-interface';
import { filter, find } from 'lodash';

class ConvertSecuritySchemes {
  constructor(private API: MS3.API) {}

  getSecuritySchemeType(type: MS3.securitySchemeType): OAS.securitySchemeType {
    if (type == 'OAuth 2.0') return 'oauth2';
    if (type == 'Basic Authentication') return 'http';
    if (type == 'Digest Authentication') return 'apiKey';
    return null;
  }

  getOAuthFlows(securityScheme: MS3.SecurityScheme) {}
  getHttpScheme(securityScheme: MS3.SecurityScheme) {}
  getApiKeyName(securityScheme: MS3.SecurityScheme) {}
  getApiKeyIn(securityScheme: MS3.SecurityScheme) {}

  getSecurityScheme(securityScheme: MS3.SecurityScheme, type: OAS.securitySchemeType): OAS.SecuritySchemeObject {
    const convertedSecurityScheme: any = {};

    switch (type) {
      case 'oauth2': {
        convertedSecurityScheme.flows = this.getOAuthFlows(securityScheme);
        break;
      }
      case 'http': {
        convertedSecurityScheme.scheme = this.getHttpScheme(securityScheme);
        break;
      }
      case 'apiKey': {
        convertedSecurityScheme.name = this.getApiKeyName(securityScheme);
        convertedSecurityScheme.in = this.getApiKeyIn(securityScheme);
      }
    }

    if (securityScheme.description) convertedSecurityScheme.description = securityScheme.description;

    return convertedSecurityScheme;
  }

  convert(): OAS.SecurityRequirement {
    return this.API.securitySchemes.reduce( (resultObject: any, securityScheme: MS3.SecurityScheme) => {
      const type = this.getSecuritySchemeType(securityScheme.type);
      if (!type) return resultObject;

      resultObject[securityScheme.name] = this.getSecurityScheme(securityScheme, type);

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