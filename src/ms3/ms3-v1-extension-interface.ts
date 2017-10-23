import * as apiInterfaces from './ms3-v1-api-interface';

interface extensionSettings extends apiInterfaces.settings {
    usage?: string,
    extends: string | apiInterfaces.MS3v1API
}

interface MS3v1Extension {
    entityTypeName: apiInterfaces.entityName,
    settings: extensionSettings,
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

export { MS3v1Extension };