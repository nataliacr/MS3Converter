/**
 * all structure of oas should be described in this interface
 */

export type type = 'array' | 'object' | 'integer' | 'long' | 'float' | 'double' | 'string' | 'byte' | 'binary' | 'boolean' | 'date' | 'dateTime' | 'password';
type format = 'int32' | 'int64' | 'float' | 'double' | 'byte' | 'binary' | 'date' | 'date-time' | 'password';
export type securitySchemeType = 'apiKey' | 'basic' | 'oauth2';
export type mediaType = 'any/*' | 'application/json' | 'application/xml' | 'application/sql' | 'application/pdf' | 'text/plain' | 'text/html' | 'text/xml' | 'text/json' | 'application/octet-stream' | 'application/x-www-form-urlencoded';
type methodType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD' | 'TRACE';
export type flow = 'implicit' | 'password' | 'application' | 'accessCode';

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

export interface SecuritySchemeObject {
  type: securitySchemeType;
  description?: string;
  name?: string;
  in?: 'query' | 'header';
  flow?: flow;
  authorizationUrl?: string;
  tokenUrl?: string;
  scopes?: {
    [propName: string]: string;
  };
}

export interface SecurityDefinitionsObject {
  [propName: string]: SecuritySchemeObject | ReferenceObject;
}

export interface SchemaObject {
  title?: string;
  type?: type;
  pattern?: string;
  multipleOf?: string | number;
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
  items?: SchemaObject | ReferenceObject;
  properties?: DefinitionsObject | ReferenceObject;
  description?: string;
  format?: format;
  allOf?: object;
  oneOf?: object;
  anyOf?: object;
  not?: object;
  additionalProperties?: object;
  default?: number | string | boolean;
  example?: any;
}

export interface DefinitionsObject {
  [propName: string]: SchemaObject | ReferenceObject;
}

interface BasicParameterFields {
  default?: number | string | boolean;
  maximum?: number;
  minimum?: number;
  exclusiveMaximum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  enum?: (number | string | boolean)[];
  multipleOf?: number;
}

export interface SecurityRequirementObject {
  [propName: string]: string[];
}

interface ItemsObject extends BasicParameterFields {
  type?: string;
  format?: string;
  items?: ItemsObject;
  collectionFormat?: string;
}

export interface ParameterObject extends BasicParameterFields {
  name: string;
  in: string;
  description?: string;
  required?: boolean;
  schema?: SchemaObject;
  type?: string;
  format?: string;
  allowEmptyValue?: boolean;
  items?: ItemsObject;
  collectionFormat?: string;
}

export interface ParametersDefinitionsObject {
  [propName: string]: ParameterObject;
}

interface HeaderObject extends ItemsObject {
  description?: string;
  type: string;
}

export interface HeadersObject {
  [propName: string]: HeaderObject;
}

export interface ExampleObject {
  [propName: string]: any;
}

export interface ResponseObject {
  description: string;
  schema?: SchemaObject | ReferenceObject;
  headers?: HeadersObject;
  examples?: ExampleObject;
}

export interface ResponsesObject {
  [propName: string]: ResponseObject | ReferenceObject;
}

export interface OperationObject {
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: object; // TODO: create External Documentation Object interface
  operationId?: string;
  consumes?: mediaType[];
  produces?: mediaType[];
  parameters?: (ParameterObject | ReferenceObject)[];
  responses: ResponsesObject;
  schemes?: ('http' | 'https')[];
  deprecated?: boolean;
  security?: SecurityRequirementObject[];
}

export interface Operation {
  get?: OperationObject;
  put?: OperationObject;
  post?: OperationObject;
  delete?: OperationObject;
  options?: OperationObject;
  head?: OperationObject;
  patch?: OperationObject;
  parameters?: (ParameterObject | ReferenceObject)[];
}

export interface PathItemObject {
  [propName: string]: Operation;
}

export interface Info {
  title: string;
  description?: string;
  termsOfService?: string;
  contact?: Contact;
  license?: License;
  version: string;
}

export interface Paths {
  [propName: string]: Operation | ReferenceObject;
}

export interface API {
  swagger: '2.0';
  info: Info;
  host?: string;
  basePath?: string;
  schemes?: ('http' | 'https')[];
  consumes?: mediaType[];
  produces?: mediaType[];
  paths: Paths;
  definitions?: DefinitionsObject;
  parameters?: ParametersDefinitionsObject;
  responses?: ResponsesObject;
  securityDefinitions?: SecurityDefinitionsObject;
  security?: SecurityRequirementObject[];
  tags?: any;
  externalDocs?: any;
}