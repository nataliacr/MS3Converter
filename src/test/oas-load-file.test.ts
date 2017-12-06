import OasLoader from './../oas/loader';
import * as path from 'path';

test('Should fail with incorrect JSON format', async () => {
  const filePath = path.join(__dirname, '..', '..', 'src', 'test', 'files', 'wrong-json.json');
  return expect(OasLoader.create(filePath).load()).rejects.toBeDefined();
});

test('Should fail with incorrect file extension', async () => {
  const filePath = path.join(__dirname, '..', '..', 'src', 'test', 'files', 'wrong-json.ms3');
  return expect(OasLoader.create(filePath).load()).rejects.toBeDefined();
});

test('Yaml swagger file should load without errors', async() => {
  const filePath = path.join(__dirname, '..', '..', 'src', 'test', 'files', 'swagger.yaml');
  let error;
  try {
    await OasLoader.create(filePath).load();
  } catch (err) {
    error = err.message;
  }
  expect(error).toBe(undefined);
});

test('Json swagger file should load without errors', async() => {
  const filePath = path.join(__dirname, '..', '..', 'src', 'test', 'files', 'swagger.json');
  let error;
  try {
    await OasLoader.create(filePath).load();
  } catch (err) {
    error = err.message;
  }
  expect(error).toBe(undefined);
});