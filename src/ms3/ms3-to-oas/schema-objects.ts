import { Schema } from './../../oas/oas-20-api-interface';

export default function parseSchemaObjects(data: Array<object>): Schema {
  // const result = data.reduce((result: any, item: any) => {
  //   result[item.name] = item;
  // }, {});
  return {
    'name': {
      'title': 'hello'
    }
  };
}