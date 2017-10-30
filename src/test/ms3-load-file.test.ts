import Ms3Loader from './../ms3/loader';
import * as path from 'path';

test('File should load without errors', async() => {
  const filePath = path.join(__dirname, '..', '..', 'src', 'test', 'files', 'Project_title.ms3');
  let error;
  try {
    await Ms3Loader.create(filePath).load();
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

test('Should fail with incorrect path', async () => {
  try {
    await Ms3Loader.create('wrong/path').load();
  } catch (err) {
    expect(err.message).toBe("Error reading Ms3 file: ENOENT: no such file or directory, open 'wrong/path'");
  }
});

test('Should fail with incorrect JSON format', async () => {
  const filePath = path.join(__dirname, '..', '..', 'src', 'test', 'files', 'wrong-json.ms3');
  return expect(Ms3Loader.create(filePath).load()).rejects.toBeDefined();
});
