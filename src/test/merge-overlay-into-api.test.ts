import mergeOverlayWithApi from './../ms3/ms3-overlay-to-api';
import { originalProject, resultProject } from './files/Merge-overlay-with-api/merge-overlay-with-api';

test('MS3 Extension and Api should be merged together successfully', async () => {
  expect(mergeOverlayWithApi(originalProject)).toEqual(resultProject);
});