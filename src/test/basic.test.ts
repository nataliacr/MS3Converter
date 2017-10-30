import * as convertor from '../index';
import { API } from '../ms3/ms3-v1-api-interface';

test('Conversion should fail if from and to formats match.', async () => {
  const format = 'ms3_1';
  const expected = new Error(`Cannot convert from ${format} to ${format}`);
  const source: API = {
    entityTypeName: 'api',
    ms3_version: '1',
    settings: {
      title: 'some-api',
      baseUri: 'http://some-api.com'
    }
  };

  await expect(convertor.convertData(source, format, format)).rejects.toMatchObject(expected);
});

test('Conversion should fail if no proper source was passed', async () => {
  const expected = new Error(`Source cannot be empty`);
  await expect(convertor.convertData(null , 'ms3_1', 'oas')).rejects.toMatchObject(expected);
});

test('Conversion from file should fail if empty path is passed to it', async () => {
  const expected = new Error(`Source path cannot be empty`);
  await expect(convertor.convertDataFromFile('' , 'ms3_1', 'oas')).rejects.toMatchObject(expected);
});