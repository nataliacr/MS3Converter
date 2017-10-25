import { Ms3Loader } from './../ms3/loader';
import * as path from 'path';
const filePath = path.join(__dirname, '..', '..', 'src', 'test', 'files', 'Project_title.ms3');

test('File should load without errors', async() => {
  let error;
  try {
    const ms3Loader = new Ms3Loader(filePath);
    await ms3Loader.load();
  } catch (err) {
    error = err.message;
  }
  expect(error).toBe(undefined);
});

test('Load file should fail with empty path', async () => {
  const expected = 'Empty path';
  try {
    const ms3Loader = new Ms3Loader();
    await ms3Loader.load();
  } catch (err) {
    expect(err.message).toBe(expected);
  }
});