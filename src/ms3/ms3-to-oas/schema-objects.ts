import { DataType, DataTypeObject, DataTypeArray, DataTypePrimitive } from './../ms3-v1-api-interface';
import { Schema, SchemaObject } from './../../oas/oas-20-api-interface';
import { find } from 'lodash';

let dataTypes: DataType[];
function getSchemaName(id: string | boolean): string {
  return find(dataTypes, ['__id', id]).name;
}

function parseSchema(schema: DataType): SchemaObject {
  const parsedSchema = <any>schema;
  delete parsedSchema.__id;
  parsedSchema.title = parsedSchema.name;
  delete parsedSchema.name;
  if (parsedSchema.properties && schema.properties.length) {
    parsedSchema.properties = parseProperties(parsedSchema.properties);
  }
  if (parsedSchema.items) {
    parsedSchema.items = parseArray(parsedSchema.items);
  }
  return parsedSchema;
}

function parseArray(data: DataTypeArray) {
  if (data.includes) {
    return {'$ref': `#/components/schemas/${getSchemaName(data.includes)}` };
  } else {
    return data;
  }
}

function parseProperties(props: Array<object>): Schema {
  const parsedProperties: any = {};
  props.forEach((prop: (DataTypeObject | DataTypePrimitive | DataTypeArray)) => {
    if (prop.includes) {
      const dataTypeName = getSchemaName(prop.includes);
      parsedProperties[dataTypeName] = {
        '$ref': `#/components/schemas/${dataTypeName}`
      };
    } else {
      parsedProperties[prop.name] = prop;
      delete parsedProperties[prop.name].name;
      if (parsedProperties.properties && parsedProperties.properties.length) {
        parsedProperties.properties = parseProperties(parsedProperties.properties);
      }
    }
  });
  return parsedProperties;
}

export default function parseSchemaObjects(data: DataType[]): Schema {
  dataTypes = data;
  const result = data.reduce((value: any, item: any) => {
    const parsedSchema = parseSchema(item);
    value[parsedSchema.title] = parsedSchema;
    return value;
  }, {});
  return result;
}
