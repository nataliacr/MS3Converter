import * as convertor from '../index';

test('Conversion should fail if from and to formats match.', async () => {
  const from = 'ms3_1';
  const to = 'ms3_1';
  const expected = `Cannot convert from ${from} to ${to}`;
  try {
    await convertor.convert('some_source', 'ms3_1', 'ms3_1');
  } catch (err) {
    expect(err.message).toBe(expected);
  }
});