import * as apiInterfaces from './ms3-v1-api-interface';

interface LibrarySettings extends apiInterfaces.Settings {
  usage: string;
}

interface Library {
  entityTypeName: apiInterfaces.entityName;
  ms3_version: string;
  settings: LibrarySettings;
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

export { Library };