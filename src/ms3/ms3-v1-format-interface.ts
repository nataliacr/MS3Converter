/**
 * all structure of ms3 should be described in this interface
 */

type mediaType = 'any/*' | 'application/json' | 'application/xml' | 'application/sql' | 'application/pdf' | 'text/plain' | 'text/html' | 'text/xml' | 'text/json' | 'application/octet-stream' | 'application/x-www-form-urlencoded';
type protocol = 'HTTP' | 'HTTPS';
type parameterType = 'string' | 'integer' | 'number' | 'boolean' | 'date';
type datatypeType = 'object' | 'string' | 'integer' | 'number' | 'boolean' | 'array' | 'date-only' | 'time-only' | 'datetime' | 'datetime-only' | 'file' | 'nil';
type numberFormat = 'Int64' | 'Int32'| 'Int16' | 'Int8' | 'Double' | 'Float';
type dateFormat = 'rfc3339' | 'rfc2616';
type exampleFormat = 'json' | 'xml' | 'txt';
type contentType = 'application/json'| 'application/xml'| 'application/sql'| 'application/pdf'| 'text/plain'| 'text/html'| 'text/xml'| 'text/json'| 'application/octet-stream'| 'application/x-www-form-urlencoded';
type methodType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD';
type entityName = 'api' | 'library' | 'overlay' | 'extension';
type securitySchemeType = 'OAuth 1.0'| 'OAuth 2.0'| 'Basic Authentication'| 'Digest Authentication'| 'Pass Through'| 'x-Other';
type signatures = 'HMAC-SHA1' | 'RSA-SHA1' | 'PLAINTEXT';

interface parameter {
    type: parameterType,
    displayName: string,
    description?: string,
    default?: string | boolean | number,
    example?: string | boolean | number,
    maxLength?: string | number,
    minLength?: string | number,
    minimum?: string | number,
    maximum?: string | number,
    pattern?: string,
    repeat?: boolean,
    required?: boolean,
    enum?: (string | number)[]
}

interface primitiveDataType {
    type: datatypeType,
    name?: string,
    description?: string,
    default?: string | number | boolean,
    example?: string | number | boolean,
    maxLength?: number,
    minLength?: number,
    minimum?: number,
    maximum?: number,
    minProperties?: number,
    maxProperties?: number,
    multipleOf: string | number,
    enum?: string[] | number[],
    fileTypes?: string[],
    pattern?: string,
    format?: numberFormat | dateFormat,
    uniqueItems?: boolean
}

interface dataTypeProperty extends primitiveDataType {
    required?: boolean,
    properties?: (dataTypeProperty | primitiveDataType | dataTypeArray)[]
}

interface dataTypeArray extends primitiveDataType {
    includes?: boolean | string,
    items?: dataTypeArray | primitiveDataType | dataTypeProperty
}

interface dataType extends primitiveDataType {
    __id: string,
    name: string,
    properties?: (dataTypeProperty | primitiveDataType)[],
    items?: dataTypeArray | primitiveDataType
}

interface body {
    contentType: contentType,    
    selectedExamples?: string[],
    type?: string,
    annotations?: annotation[]
}

interface response {
    code: string,
    description?: string,
    annotations?: annotation[],
    headers?: parameter[],
    body?: body[]
}

interface trait {
    name: string | methodType,
    description?: string,
    body?: body[],
    headers?: parameter[],
    queryParameters?: parameter[],
    responses?: response[],
    annotations?: annotation[]
}

interface method extends trait {
    active: boolean,
    name: methodType,
    securedBy?: string, 
    selectedTraits?: string
}

interface resourcesType {
    name: string,
    description?: string,
    methods: method[],    
    annotations?: annotation[]
}

interface resource extends resourcesType {
    __id: string,
    path: string,
    pathVariables?: parameter[],
    securedBy?: string, 
    selectedTraits?: string,
    type?: string,
    resources?: resource[],
    parentId?: string
}

interface securityScheme {
    __id: string,
    name: string,
    type: securitySchemeType,
    description?: string,
    describedBy?: {
        headers?: parameter[],
        queryParameters?: parameter[],
        responses?: response[]
    },
    annotations?: annotation[],
    settings?: {
        accessTokenUri?: string,
        authorizationUri?: string,
        requestTokenUri?: string,
        tokenCredentialsUri?: string,
        authorizationGrants?: string[],
        scopes?: string[],
        signatures?: signatures[]
    }
}

interface documentation {
    __id: string,
    name: string,
    description?: string,
    annotations: annotation[]
}

interface basicAnnotationType {
    type: 'object' | 'string' | 'integer',
    name: string,
    description?: string,
    pattern?: string,
    enum?: string[]
}

interface primitiveAnnotation extends basicAnnotationType{
    value?: string | number
}

interface annotation extends basicAnnotationType{
    allowedTargets?: string[],
    value?: string | number,
    properties?: primitiveAnnotation[]
}

interface primitiveAnnotationType extends basicAnnotationType {
    type: 'string' | 'integer'
}

interface annotationType extends basicAnnotationType {
    allowedTargets?: string[],
    properties?: primitiveAnnotationType[]
}

interface example {
    __id: string,
    title: string, //CHANGE TO NAME
    description?: string,
    format: exampleFormat,
    content: string,
    annotations: annotation[]
}

interface settings {
    title: string,
    version: string,
    baseUri: string,
    description?: string,
    mediaType?: mediaType[],
    protolos?: protocol[],
    baseUriParameters?: parameter[],
    securedBy?: string[],
    annotations?: annotation[]
}

interface librarySettings extends settings {
    usage?: string,
}

interface overlaySettings extends settings {
    usage?: string,
    extends: string | MS3v1API
}

interface extensionSettings extends settings {
    usage?: string,
    extends: string | MS3v1API
}

interface library {
    _id: string,
    refName: string,
    library: MS3v1Library
}

interface MS3v1API {
    entityTypeName: entityName,
    settings: settings,
    folder?: string[],
    dataTypes?: dataType[],
    resources?: resource[],
    securitySchemes?: securityScheme[],
    resourcesTypes?: resourcesType[],
    traits?: trait[],
    documentation?: documentation[],
    annotationTypes?: annotationType[],
    examples?: example[],
    libraries?: library[]
}

interface MS3v1Library {
    entityTypeName: entityName,
    settings: librarySettings,
    folder?: string[],
    dataTypes?: dataType[],
    resources?: resource[],
    securitySchemes?: securityScheme[],
    resourcesTypes?: resourcesType[],
    traits?: trait[],
    documentation?: documentation[],
    annotationTypes?: annotationType[],
    examples?: example[],
    libraries?: library[]
}

interface MS3v1Overlay {
    entityTypeName: entityName,
    settings: overlaySettings,
    folder?: string[],
    dataTypes?: dataType[],
    resources?: resource[],
    securitySchemes?: securityScheme[],
    resourcesTypes?: resourcesType[],
    traits?: trait[],
    documentation?: documentation[],
    annotationTypes?: annotationType[],
    examples?: example[],
    libraries?: library[]
}

interface MS3v1Extension {
    entityTypeName: entityName,
    settings: extensionSettings,
    folder?: string[],
    dataTypes?: dataType[],
    resources?: resource[],
    securitySchemes?: securityScheme[],
    resourcesTypes?: resourcesType[],
    traits?: trait[],
    documentation?: documentation[],
    annotationTypes?: annotationType[],
    examples?: example[],
    libraries?: library[]
}

export {
    MS3v1API as MS3v1API,
    MS3v1Library as MS3v1Library,
    MS3v1Overlay as MS3v1Overlay,
    MS3v1Extension as MS3v1Extension
};