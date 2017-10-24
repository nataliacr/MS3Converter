import * as apiInterfaces from './ms3-v1-api-interface';

interface librarySettings extends apiInterfaces.settings {
  usage?: string,
}

interface Library {
  entityTypeName: apiInterfaces.entityName,
  settings: librarySettings,
  folder?: string[],
  dataTypes?: apiInterfaces.dataType[],
  resources?: apiInterfaces.resource[],
  securitySchemes?: apiInterfaces.securityScheme[],
  resourcesTypes?: apiInterfaces.resourcesType[],
  traits?: apiInterfaces.trait[],
  documentation?: apiInterfaces.documentation[],
  annotationTypes?: apiInterfaces.annotationType[],
  examples?: apiInterfaces.example[],
  libraries?: apiInterfaces.library[]
}

export { Library };