import * as apiInterfaces from './ms3-v1-api-interface';

interface OverlaySettings extends apiInterfaces.Settings {
  usage?: string;
  extends: string | apiInterfaces.API;
}

interface Overlay {
  entityTypeName: apiInterfaces.entityName;
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
  libraries?: apiInterfaces.Library[];
}

export { Overlay };