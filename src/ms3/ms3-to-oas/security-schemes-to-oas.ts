import * as OAS from './../../oas/oas-30-api-interface';
import * as MS3 from './../ms3-v1-api-interface';
import { filter, find, intersection } from 'lodash';

class ConvertSecuritySchemes {
  constructor(private API: MS3.API) {}

  getSecuritySchemeType(type: MS3.securitySchemeType): OAS.securitySchemeType {
    if (type == 'OAuth 2.0') return 'oauth2';
    if (type == 'Basic Authentication') return 'http';
    return null;
  }

  getOAuthFlowObject(grant: string, settings: any): OAS.OAuthFlow {
    const resultFlowObject: any = {};

    if (grant == 'implicit' || grant == 'authorizationCode') resultFlowObject.authorizationUrl = settings.authorizationUri || 'https://auth.url';
    if (grant == 'password' || grant == 'clientCredentials' || grant == 'authorizationCode') resultFlowObject.tokenUrl = settings.accessTokenUri || 'https://token.url';
    resultFlowObject.scopes = settings.scopes || [];

    return resultFlowObject;
  }

  getOAuthFlows(securityScheme: MS3.SecurityScheme): void | OAS.Schema {
    const resultObject: any = {};

    const validGrants = intersection(securityScheme.settings.authorizationGrants, ['implicit', 'password', 'client_credentials', 'authorization_code']);
    if (!validGrants.length) return null;

    validGrants.forEach( (grant: string) => {
      const grantKey = grant.replace(/_([a-z])/g, (g) => g[1].toUpperCase() );
      resultObject[grantKey] = this.getOAuthFlowObject(grantKey, securityScheme.settings);
    });

    return resultObject;
  }

  getSecurityScheme(securityScheme: MS3.SecurityScheme, type: OAS.securitySchemeType): OAS.SecuritySchemeObject {
    const convertedSecurityScheme: any = {
      type: type
    };

    if (type == 'oauth2' && this.getOAuthFlows(securityScheme)) convertedSecurityScheme.flows = this.getOAuthFlows(securityScheme);
    if (type == 'http') convertedSecurityScheme.scheme = 'basic';
    if (securityScheme.description) convertedSecurityScheme.description = securityScheme.description;

    return convertedSecurityScheme;
  }

  convert(): OAS.SecurityScheme {
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

export default function convertSecuritySchemes(API: MS3.API): OAS.SecurityScheme {
  return ConvertSecuritySchemes.create(API).convert();
}