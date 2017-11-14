import mergeExtensionWithApi from './../ms3/ms3-extension-to-api';
import { originalProjectWithSettings, resultProjectWithSettings } from './files/Merge-extension-with-api/merge-extension-with-api-settings';
import { originalProjectWithExamples, resultProjectWithExamples } from './files/Merge-extension-with-api/merge-extension-with-api-examples';
import { originalProjectWithDataTypes, resultProjectWithDataTypes } from './files/Merge-extension-with-api/merge-extension-with-api-datatypes';

test('MS3 Extension and Api settings should be merged together successfully', async () => {
  expect(mergeExtensionWithApi(originalProjectWithSettings)).toEqual(resultProjectWithSettings);
});

test('MS3 Extension and Api examples should be merged together successfully', async () => {
  expect(mergeExtensionWithApi(originalProjectWithExamples)).toEqual(resultProjectWithExamples);
});

test('MS3 Extension and Api datatypes should be merged together successfully', async () => {
  expect(mergeExtensionWithApi(originalProjectWithDataTypes)).toEqual(resultProjectWithDataTypes);
});