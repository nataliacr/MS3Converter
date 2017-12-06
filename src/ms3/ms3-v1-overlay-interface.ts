import * as apiInterfaces from './ms3-v1-api-interface';

interface OverlaySettings extends apiInterfaces.Settings {
  usage?: string;
  extends: string | apiInterfaces.API;
}

export default interface Overlay {
  entityTypeName: apiInterfaces.entityName;
  ms3_version: string;
  settings: OverlaySettings;
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