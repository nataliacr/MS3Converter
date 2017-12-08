import * as Library from './ms3-v1-library-interface';

/**
 * all structure of ms3 should be described in this interface
 */

type mediaType = 'any/*' | 'application/json' | 'application/xml' | 'application/sql' | 'application/pdf' | 'text/plain' | 'text/html' | 'text/xml' | 'text/json' | 'application/octet-stream' | 'application/x-www-form-urlencoded';
type protocol = 'HTTP' | 'HTTPS';
export type parameterType = 'string' | 'integer' | 'number' | 'boolean' | 'date';
type datatypeType = 'object' | 'string' | 'integer' | 'number' | 'boolean' | 'array' | 'date-only' | 'time-only' | 'datetime' | 'datetime-only' | 'file' | 'nil';
type numberFormat = 'int64' | 'int32' | 'int16' | 'int8' | 'double' | 'float';
type dateFormat = 'rfc3339' | 'rfc2616';
type exampleFormat = 'json' | 'xml' | 'txt';
export type contentType = 'application/json' | 'application/xml' | 'application/sql' | 'application/pdf' | 'text/plain' | 'text/html' | 'text/xml' | 'text/json' | 'application/octet-stream' | 'application/x-www-form-urlencoded';
type methodType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD' | 'TRACE';
export type entityName = 'api' | 'library' | 'overlay' | 'extension';
export type securitySchemeType = 'OAuth 1.0' | 'OAuth 2.0' | 'Basic Authentication' | 'Digest Authentication' | 'Pass Through' | 'x-Other';
export type signatures = 'HMAC-SHA1' | 'RSA-SHA1' | 'PLAINTEXT';

export interface Parameter {
  type: parameterType;
  displayName: string;
  description?: string;
  default?: string | boolean | number;
  example?: string | boolean | number;
  maxLength?: string | number;
  minLength?: string | number;
  minimum?: string | number;
  maximum?: string | number;
  pattern?: string;
  repeat?: boolean;
  required?: boolean;
  enum?: string[] | number[];
}

export interface DataTypePrimitive {
  type?: datatypeType;
  name?: string;
  description?: string;
  default?: string | number | boolean;
  example?: string | number | boolean;
  maxLength?: number;
  minLength?: number;
  minimum?: number;
  maximum?: number;
  minProperties?: number;
  maxProperties?: number;
  multipleOf?: string | number;
  enum?: string[] | number[];
  fileTypes?: string[];
  pattern?: string;
  format?: numberFormat | dateFormat;
  uniqueItems?: boolean;
  maxItems?: number;
  minItems?: number;
  includes?: string;
}

export interface DataTypeObject extends DataTypePrimitive {
  required?: boolean;
  properties?: (DataTypeObject | DataTypePrimitive | DataTypeArray)[];
}

export interface DataTypeArray extends DataTypePrimitive {
  includes?: string;
  mode?: string; // TODO: Remove this field after front end refactor;
  items?: DataTypeArray | DataTypePrimitive | DataTypeObject;
}

export interface DataType extends DataTypePrimitive {
  __id: string;
  name: string;
  properties?: (DataTypeObject | DataTypePrimitive | DataTypeArray)[];
  items?: DataTypeArray | DataTypePrimitive;
}

export interface Body {
  contentType: contentType;
  selectedExamples?: string[];
  type?: string;
  annotations?: Annotation[];
}

export interface Response {
  code: string;
  description?: string;
  annotations?: Annotation[];
  headers?: Parameter[];
  body?: Body[];
}

export interface BasicTrait {
  name: string | methodType;
  description?: string;
  body?: Body[];
  headers?: Parameter[];
  queryParameters?: Parameter[];
  responses?: Response[];
  annotations?: Annotation[];
  selectedTraits?: string[];
}

export interface Trait extends BasicTrait {
  __id: string;
}

export interface Method extends BasicTrait {
  active: boolean;
  securedBy?: string[];
}

export interface ResourcesType {
  __id: string;
  name?: string;
  path?: string;
  description?: string;
  pathVariables?: Parameter[];
  queryParameters?: Parameter[];
  methods: Method[];
  annotations?: Annotation[];
}

export interface NestedResource {
  id: string;
  path: string;
  parentId?: string;
}

export interface Resource extends ResourcesType {
  path: string;
  securedBy?: string[];
  selectedTraits?: string[];
  type?: string;
  resources?: NestedResource[];
  parentId?: string;
}

export interface SecurityScheme {
  __id: string;
  name: string;
  type: securitySchemeType;
  description?: string;
  describedBy?: {
    headers?: Parameter[];
    queryParameters?: Parameter[];
    responses?: Response[]
  };
  annotations?: Annotation[];
  settings?: {
    accessTokenUri?: string;
    authorizationUri?: string;
    requestTokenUri?: string;
    tokenCredentialsUri?: string;
    authorizationGrants?: string[];
    scopes?: string[];
    signatures?: signatures[]
  };
}

export interface Documentation {
  __id: string;
  name: string;
  description?: string;
  annotations?: Annotation[];
}

interface BasicAnnotationType {
  type: 'object' | 'string' | 'integer';
  name: string;
  description?: string;
  pattern?: string;
  enum?: string[];
  required?: boolean;
}

interface PrimitiveAnnotation extends BasicAnnotationType {
  value?: string | number;
}

export interface Annotation extends BasicAnnotationType {
  allowedTargets?: string[];
  value?: string | number;
  properties?: PrimitiveAnnotation[];
}

interface PrimitiveAnnotationType extends BasicAnnotationType {
  type: 'string' | 'integer';
}

export interface AnnotationType extends BasicAnnotationType {
  allowedTargets?: string[];
  properties?: PrimitiveAnnotationType[];
}

export interface Example {
  __id: string;
  title: string; // CHANGE TO NAME
  format: exampleFormat;
  content: string;
  annotations?: Annotation[];
}

export interface Settings {
  title: string;
  baseUri: string;
  version?: string;
  description?: string;
  mediaType?: mediaType;
  protocols?: protocol[];
  baseUriParameters?: Parameter[];
  securedBy?: string[];
  annotations?: Annotation[];
}

export interface IncludedLibrary {
  _id: string;
  refName: string;
  library: Library.Library;
}

export interface API {
  entityTypeName: entityName;
  ms3_version: string;
  settings: Settings;
  folder?: string[];
  dataTypes?: DataType[];
  resources?: Resource[];
  securitySchemes?: SecurityScheme[];
  resourcesTypes?: ResourcesType[];
  traits?: Trait[];
  documentation?: Documentation[];
  annotationTypes?: AnnotationType[];
  examples?: Example[];
  libraries?: IncludedLibrary[];
}