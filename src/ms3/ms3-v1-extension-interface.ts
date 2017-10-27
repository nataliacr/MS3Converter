import * as apiInterfaces from './ms3-v1-api-interface';

interface ExtensionSettings extends apiInterfaces.Settings {
  usage?: string;
  extends: string | apiInterfaces.API;
}

interface Extension {
  entityTypeName: apiInterfaces.entityName;
  ms3_version: string;
  settings: ExtensionSettings;
  folder?: string[];
  dataTypes?: apiInterfaces.DataType[];
  resources?: apiInterfaces.Resource[];
  securitySchemes?: apiInterfaces.SecurityScheme[];
  resourcesTypes?: apiInterfaces.ResourcesType[];
  traits?: apiInterfaces.Trait[];
  documentation?: apiInterfaces.Documentation[];
  annotationTypes?: apiInterfaces.AnnotationType[];
  examples?: apiInterfaces.Example[];
  libraries?: apiInterfaces.IncludedLibrary[];
}

export { Extension };