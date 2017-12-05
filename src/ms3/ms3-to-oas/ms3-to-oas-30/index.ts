import * as MS3Interface from '../../../ms3/ms3-v1-api-interface';
import * as OAS30Interface from '../../../oas/oas-30-api-interface';

import mergeLibraryToMs3 from '../../merge-library-to-ms3';
import mergeTypesAndTraits from '../merge-resource-types-and-traits';

import convertSecuritySchemes from './security-schemes-to-oas';
import convertResourcesToPaths from './resources-to-paths';

import { convertDataTypesToSchemas, convertExternalSchemas, convertExternalSchemasReferences } from '../datatypes-to-schemas';
import { convertInlineExamples, convertExternalExamples, convertExternalExampleReferences } from '../examples-to-oas';

import { cloneDeep } from 'lodash';

class MS3toOAS30 {
  oasAPI: OAS30Interface.API;
  externalFiles: any = {
    examples: [],
    schemas: []
  };

  constructor(private ms3API: MS3Interface.API, private options: any) {}

  static create(ms3API: MS3Interface.API, options: any) {
    return new MS3toOAS30(ms3API, options);
  }

  convert() {
    this.oasAPI = {
      openapi: '3.0',
      info: this.convertSettings(),
      paths: {},
      components: {}
    };

    if (this.ms3API.libraries) this.ms3API = mergeLibraryToMs3(this.ms3API);
    if (this.ms3API.dataTypes) {
      if (this.options.destinationPath) {
        this.externalFiles.schemas = this.externalFiles.schemas.concat(convertExternalSchemas(this.ms3API, this.options.destinationPath));
        this.oasAPI.components.schemas = convertExternalSchemasReferences(this.ms3API);
      }
      else this.oasAPI.components.schemas = convertDataTypesToSchemas(this.ms3API);
    }

    if (this.ms3API.examples) {
      if (this.options.destinationPath) {
        this.externalFiles.examples = this.externalFiles.examples.concat(convertExternalExamples(this.ms3API.examples, this.options.destinationPath));
        this.oasAPI.components.examples = convertExternalExampleReferences(this.ms3API.examples);
      }
      else this.oasAPI.components.examples = convertInlineExamples(this.ms3API.examples);
    }

    if (this.ms3API.securitySchemes) this.oasAPI.components.securitySchemes = convertSecuritySchemes(this.ms3API);
    if (this.ms3API.resources) {
      let mergedApi: MS3Interface.API = cloneDeep(this.ms3API);
      if (this.ms3API.resourcesTypes || this.ms3API.traits) {
        mergedApi = mergeTypesAndTraits(this.ms3API);
      }
      this.oasAPI.paths = convertResourcesToPaths(mergedApi);
    }

    return {
      API: this.oasAPI,
      externalFiles: this.externalFiles
    };
  }

  private convertSettings(): OAS30Interface.Info {
    if (!this.ms3API.settings.title) {
      throw new Error('MS3 API settings must contain title property.');
    }

    const settings: OAS30Interface.Info = {
      title: this.ms3API.settings.title,
      description: this.ms3API.settings.description || 'API description',
      version: this.ms3API.settings.version || '3.0'
    };

    return settings;
  }
}

export default function convertOAS30(ms3API: MS3Interface.API, options: any): any {
  return MS3toOAS30.create(ms3API, options).convert();
}