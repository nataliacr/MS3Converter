import { DataType, DataTypeObject, DataTypeArray, DataTypePrimitive } from './../ms3-v1-api-interface';
import { Schema, SchemaObject } from './../../oas/oas-20-api-interface';

function parseSchema(schema: DataType): SchemaObject {
  const parsedSchema = <any>schema;
  delete parsedSchema.__id;
  parsedSchema.title = parsedSchema.name;
  delete parsedSchema.name;
  if (parsedSchema.properties && schema.properties.length) {
    parsedSchema.properties = parseProperties(parsedSchema.properties);
  }
  return parsedSchema;
}

function parseProperties(props: Array<object>): Schema {
  const parsedProperties: any = {};
  props.forEach((prop: (DataTypeObject | DataTypePrimitive | DataTypeArray)) => {
    parsedProperties[prop.name] = prop;
    delete parsedProperties[prop.name].name;
    if (parsedProperties.properties && parsedProperties.properties.length) {
      parsedProperties.properties = parseProperties(parsedProperties.properties);
    }
  });
  return parsedProperties;
}

export default function parseSchemaObjects(data: Array<object>): Schema {
  const result = data.reduce((value: any, item: any) => {
    const parsedSchema = parseSchema(item);
    value[parsedSchema.title] = parsedSchema;
    return value;
  }, {});
  return result;
}
