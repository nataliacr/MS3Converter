import * as OAS from '../../../oas/oas-20-api-interface';
import * as MS3 from '../../ms3-v1-api-interface';
import { filter, find, intersection } from 'lodash';

const basic = 'basic';
const oauth2 = 'oauth2';

class ConvertSecuritySchemes {
  constructor(private API: MS3.API) {}

  getSecuritySchemeType(type: MS3.securitySchemeType): OAS.securitySchemeType {
    if (type == 'OAuth 2.0') return oauth2;
    if (type == 'Basic Authentication') return basic;
    return null;
  }

  getScopesObject(scopes: string[]): any {
    return scopes.reduce((result: any, scope: string) => {
      result[scope] = '';
      return result;
    }, {});
  }

  getSecurityScheme(securityScheme: MS3.SecurityScheme, type: OAS.securitySchemeType): OAS.SecuritySchemeObject {
    const convertedSecurityScheme: any = {
      type: type
    };

    if (securityScheme.description) convertedSecurityScheme.description = securityScheme.description;
    if (type == oauth2) {
      const flows = intersection(securityScheme.settings.authorizationGrants, ['implicit', 'password']);
      if (flows && flows.length) convertedSecurityScheme.flow = flows[0];
      if ((convertedSecurityScheme.flow == 'implicit') && securityScheme.settings.authorizationUri) convertedSecurityScheme.authorizationUrl = securityScheme.settings.authorizationUri;
      if ((convertedSecurityScheme.flow == 'password') && securityScheme.settings.accessTokenUri) convertedSecurityScheme.tokenUrl = securityScheme.settings.accessTokenUri;
      if (securityScheme.settings.scopes) convertedSecurityScheme.scopes = this.getScopesObject(securityScheme.settings.scopes);
    }

    return convertedSecurityScheme;
  }

  convert(): OAS.SecurityDefinitionsObject {
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

export default function convertSecuritySchemes(API: MS3.API): OAS.SecurityDefinitionsObject {
  return ConvertSecuritySchemes.create(API).convert();
}