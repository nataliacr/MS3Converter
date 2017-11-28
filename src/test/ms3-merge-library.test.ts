import { originalProject, resultObject } from './files/Project-with-library';
import mergeLibraryToMs3 from '../ms3/ms3-to-oas/merge-library-to-ms3';

test('Should merge libraries to project Successfully', async () => {
  await expect(mergeLibraryToMs3(originalProject)).toEqual(resultObject);
});