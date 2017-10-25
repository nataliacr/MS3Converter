/**
 * all structure of oas should be described in this interface
 */
import { SIGTERM } from 'constants';

type type = 'integer' | 'long' | 'float' | 'double' | 'string' | 'byte' | 'binary' | 'boolean' | 'date' | 'dateTime' | 'password';
type format = 'int32' | 'int64' | 'float' | 'double' | 'byte' | 'binary' | 'date' | 'date-time' | 'password';
type securitySchemeType = 'apiKey' | 'http' | 'oauth2' | 'openIdConnect';

interface Contact {
  name?: string;
  url?: string;
  email?: string;
}

interface License {
  name: string;
  url?: string;
}

interface ReferenceObject {
  '$ref'?: string;
}

interface SchemaObject {
  title?: string;
  type?: type;
  multipleOf?: string;
  maximum?: number;
  minimum?: number;
  exclusiveMaximum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  minLength?: number;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: string;
  maxProperties?: number;
  minProperties?: number;
  required?: boolean;
  enum?: string[];
  items?: {
    [propName: string]: SchemaObject
  };
  properties?: {
    [propName: string]: SchemaObject
  };
  description?: string;
  format?: format;
  allOf?: object;
  oneOf?: object;
  anyOf?: object;
  not?: object;
  additionalProperties?: object;
  default?: SchemaObject;
}

interface Schema {
  [propName: string]: SchemaObject | ReferenceObject;
}

interface EncodingObject {
  contentType?: string;
  headers?: Header[];
  style?: string;
  explode?: boolean;
  allowReserved?: boolean;
}

interface Encoding {
  [propName: string]: EncodingObject;
}

interface MediaTypeObject {
  schema?: SchemaObject | ReferenceObject;
  example?: any;
  examples?: Example[];
  encoding?: Encoding[];
}

interface MediaType {
  [propName: string]: MediaTypeObject | ReferenceObject;
}

interface ResponseObject {
  description: string;
  headers?: Header[];
  content?: MediaType[];
  links?: Link[];
}

interface Response {
  [propName: string]: ResponseObject | ReferenceObject;
}

interface ParameterObject extends HeaderObject {
  name: string;
  in: string;
}

interface Parameter {
  [propName: string]: ParameterObject | ReferenceObject;
}

interface ExampleObject {
  summary?: string;
  description?: string;
  value?: any;
  externalValue?: string;
}

interface Example {
  [propName: string]: ExampleObject | ReferenceObject;
}

interface RequestBodyObject {
  description?: string;
  content: MediaType[];
  required: boolean;
}

interface RequestBody {
  [propName: string]: RequestBodyObject | ReferenceObject;
}

interface HeaderObject {
  description?: string;
  required: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  schema?: SchemaObject;
  style?: string;
  example?: any;
  examples?: Example;
  explode?: boolean;
}

interface Header {
  [propName: string]: HeaderObject | ReferenceObject;
}

interface OAuthFlow {
  authorizationUrl: string;
  tokenUrl: string;
  refreshUrl?: string;
  scopes: object;
}

interface OAuthFlows {
  implicit?: OAuthFlow;
  password?: OAuthFlow;
  clientCredentials?: OAuthFlow;
  authorizationCode?: OAuthFlow;
}

interface SecuritySchemeObject {
  type?: securitySchemeType;
  description?: string;
  name: string;
  in: 'query' | 'header' | 'cookie';
  scheme: string;
  bearerFormat?: string;
  flows: OAuthFlows;
  openIdConnectUrl: string;
}

interface SecurityScheme {
  [propName: string]: SecuritySchemeObject | ReferenceObject;
}

interface LinkObject {
  operationRef?: string;
  operationId?: string;
  parameters?: any;
  requestBody?: any;
  description?: string;
  server?: object; // TODO
}

interface Link {
  [propName: string]: LinkObject | ReferenceObject;
}

interface Components {
  schemas?: Schema[];
  responses?: Response[];
  parameters?: Parameter[];
  examples?: Example[];
  requestBodies?: RequestBody[];
  headers?: Header[];
  securitySchemes?: SecurityScheme[];
  links?: Link[];
  callbacks?: object;
}

interface InfoObject {
  title: string;
  description?: string;
  termsOfService?: string;
  contact?: Contact;
  license?: License;
  version: string;
  server?: object; // TODO
}

interface API {
  infoObject: InfoObject;
  components?: Components;
}

export { API, InfoObject };