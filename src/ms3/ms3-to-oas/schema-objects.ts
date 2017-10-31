import { SchemaObjects } from './../../oas/oas-20-api-interface';

export default function parseSchemaObjects(data: Array<object>): SchemaObjects {
  // const result = data.reduce((result: any, item: any) => {
  //   result[item.name] = item;
  // }, {});
  return {
    'name': {
      'title': 'hello'
    }
  };
}