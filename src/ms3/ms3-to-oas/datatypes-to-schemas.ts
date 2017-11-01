// import { DataType, DataTypeObject, DataTypeArray, DataTypePrimitive } from './../ms3-v1-api-interface';
// import { Schema, SchemaObject } from './../../oas/oas-20-api-interface';
// import { find } from 'lodash';

// let dataTypes: DataType[];
// function getSchemaName(id: string): string {
//   return find(dataTypes, ['__id', id]).name;
// }

// function convertSchema(schema: DataType): SchemaObject {
//   const convertedSchema = <any>schema;
//   delete convertedSchema.__id;
//   convertedSchema.title = convertedSchema.name;
//   delete convertedSchema.name;
//   if (convertedSchema.properties && schema.properties.length) {
//     convertedSchema.properties = convertProperties(convertedSchema.properties);
//   }
//   if (convertedSchema.items) {
//     convertedSchema.items = convertArray(convertedSchema.items);
//   }
//   return convertedSchema;
// }

// function convertArray(data: DataTypeArray) {
//   if (data.includes) {
//     return {'$ref': `#/components/schemas/${getSchemaName(data.includes)}` };
//   } else {
//     return data;
//   }
// }

// function convertProperties(props: Array<object>): Schema {
//   const convertedProperties: any = {};
//   props.forEach((prop: (DataTypeObject | DataTypePrimitive | DataTypeArray)) => {
//     if (prop.includes) {
//       const dataTypeName = getSchemaName(prop.includes);
//       convertedProperties[dataTypeName] = {
//         '$ref': `#/components/schemas/${dataTypeName}`
//       };
//     } else {
//       convertedProperties[prop.name] = prop;
//       delete convertedProperties[prop.name].name;
//       if (convertedProperties.properties && convertedProperties.properties.length) {
//         convertedProperties.properties = convertProperties(convertedProperties.properties);
//       }
//     }
//   });
//   return convertedProperties;
// }
// export default function convertDataTypesToSchemas(data: DataType[]): Schema {
//   dataTypes = data;
//   const result = data.reduce((value: any, item: any) => {
//     const convertedSchema = convertSchema(item);
//     value[convertedSchema.title] = convertedSchema;
//     return value;
//   }, {});
//   return result;
// }


import * as MS3 from './../ms3-v1-api-interface';
import { Schema, SchemaObject } from './../../oas/oas-20-api-interface';
import { DataType, DataTypeObject, DataTypeArray, DataTypePrimitive } from './../ms3-v1-api-interface';
import { find } from 'lodash';

class ConvertDataTypesToSchemas {
  constructor(private API: MS3.API) {}

  convert(): Schema {
    const result = this.API.dataTypes.reduce((value: any, item: any) => {
      const convertedSchema = this.convertSchema(item);
      value[convertedSchema.title] = convertedSchema;
      return value;
    }, {});
    return result;
  }

  convertSchema(schema: DataType): SchemaObject {
    const convertedSchema = <any>schema;
    delete convertedSchema.__id;
    convertedSchema.title = convertedSchema.name;
    delete convertedSchema.name;
    if (convertedSchema.properties && schema.properties.length) {
      convertedSchema.properties = this.convertProperties(convertedSchema.properties);
    }
    if (convertedSchema.items) {
      convertedSchema.items = this.convertArray(convertedSchema.items);
    }
    return convertedSchema;
  }

  convertArray(data: DataTypeArray) {
    if (data.includes) {
      return {'$ref': `#/components/schemas/${this.getSchemaName(data.includes)}` };
    } else {
      return data;
    }
  }

  convertProperties(props: Array<object>): Schema {
    const convertedProperties: any = {};
    props.forEach((prop: (DataTypeObject | DataTypePrimitive | DataTypeArray)) => {
      if (prop.includes) {
        const dataTypeName = this.getSchemaName(prop.includes);
        convertedProperties[dataTypeName] = {
          '$ref': `#/components/schemas/${dataTypeName}`
        };
      } else {
        convertedProperties[prop.name] = prop;
        delete convertedProperties[prop.name].name;
        if (convertedProperties.properties && convertedProperties.properties.length) {
          convertedProperties.properties = this.convertProperties(convertedProperties.properties);
        }
      }
    });
    return convertedProperties;
  }

  getSchemaName(id: string): string {
    return find(this.API.dataTypes, ['__id', id]).name;
  }

  static create(api: MS3.API) {
    return new ConvertDataTypesToSchemas(api);
  }
}

export default function convertDataTypesToSchemas(API: MS3.API): Schema {
  return ConvertDataTypesToSchemas.create(API).convert();
}
