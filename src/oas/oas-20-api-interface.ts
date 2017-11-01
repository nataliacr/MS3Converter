/**
 * all structure of oas should be described in this interface
 */

type type = 'array' | 'object' | 'integer' | 'long' | 'float' | 'double' | 'string' | 'byte' | 'binary' | 'boolean' | 'date' | 'dateTime' | 'password';
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

export interface ReferenceObject {
  '$ref': string;
}

export interface SchemaObject {
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
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  required?: boolean;
  enum?: string[];
  items?: Schema | ReferenceObject;
  properties?: Schema | ReferenceObject;
  description?: string;
  format?: format;
  allOf?: object;
  oneOf?: object;
  anyOf?: object;
  not?: object;
  additionalProperties?: object;
  default?: SchemaObject;
}

export interface Schema {
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
  examples?: Example;
  encoding?: Encoding[];
}

export interface MediaType {
  [propName: string]: MediaTypeObject | ReferenceObject;
}

interface ResponseObject {
  description: string;
  headers?: Header[];
  content?: MediaType;
  links?: Link[];
}

interface Response {
  [propName: string]: ResponseObject | ReferenceObject;
}

export interface ParameterObject extends HeaderObject {
  name: string;
  in: string;
}

export interface ExampleObject {
  summary?: string;
  description?: string;
  value?: any;
  externalValue?: string;
}

export interface Example {
  [propName: string]: ExampleObject | ReferenceObject;
}

interface RequestBodyObject {
  description?: string;
  content: MediaType;
  required?: boolean;
}

export interface RequestBody {
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
  tokenUrl?: string;
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
  name?: string;
  in?: 'query' | 'header' | 'cookie';
  scheme?: string;
  bearerFormat?: string;
  flows?: OAuthFlows;
  openIdConnectUrl?: string;
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
  server?: Server;
}

interface Link {
  [propName: string]: LinkObject | ReferenceObject;
}

export interface ResponsesObject {
  default?: ResponseObject | ReferenceObject;
  [propName: string]: ResponseObject | ReferenceObject;
}

interface SecurityRequirement {
  [propName: string]: string[];
}

export interface Operation {
  operationId?: string;
  summary?: string;
  description?: string;
  parameters?: ParameterObject[];
  requestBody?: RequestBodyObject | ReferenceObject;
  responses: ResponsesObject;
  tags?: string[];
  deprecated?: boolean;
  security?: SecurityRequirement[];
  servers?: Server[];
  callbacks?: object; // TODO: create Callback Object interface
  externalDocs?: object; // TODO: create External Documentation Object interface
}

interface Server {}

interface Tag {}

interface ExternalDocs {}

interface PathItemObject {
  '$ref'?: string;
  summary?: string;
  description?: string;
  get?: Operation;
  put?: Operation;
  post?: Operation;
  delete?: Operation;
  options?: Operation;
  head?: Operation;
  patch?: Operation;
  trace?: Operation;
  servers?: Server[];
  parameters?: [ ParameterObject | ReferenceObject ];
}

export interface Components {
  schemas?: Schema;
  responses?: Response;
  parameters?: ParameterObject[];
  examples?: Example;
  requestBodies?: RequestBody[];
  headers?: Header[];
  securitySchemes?: SecurityScheme;
  links?: Link[];
  callbacks?: object; // TODO: create Callback Object interface
}

export interface Info {
  title: string;
  description?: string;
  termsOfService?: string;
  contact?: Contact;
  license?: License;
  version: string;
  server?: Server;
}

export interface Paths {
  [propName: string]: PathItemObject;
}

export interface API {
  openapi: string;
  info: Info;
  paths: Paths;
  servers?: Server[];
  components?: Components;
  security?: SecurityRequirement[];
  tags?: Tag[];
  externalDocs?: ExternalDocs;
}