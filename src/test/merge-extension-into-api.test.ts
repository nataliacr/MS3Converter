import mergeExtensionWithApi from './../ms3/ms3-extension-to-api';
import { originalProjectWithSettings, resultProjectWithSettings } from './files/Merge-extension-with-api/merge-extension-with-api-settings';
import { originalProjectWithExamples, resultProjectWithExamples } from './files/Merge-extension-with-api/merge-extension-with-api-examples';
import { originalProjectWithDataTypes, resultProjectWithDataTypes } from './files/Merge-extension-with-api/merge-extension-with-api-datatypes';
import { originalProjectWithTraits, resultProjectWithTraits } from './files/Merge-extension-with-api/merge-extension-with-api-traits';
import { originalProjectWithResources, resultProjectWithResources } from './files/Merge-extension-with-api/merge-extension-with-api-resources';
import { originalProjectWithSecuritySchemes, resultProjectWithSecuritySchemes } from './files/Merge-extension-with-api/merge-extension-with-api-securitySchemes';

test('MS3 Extension and Api settings should be merged together successfully', async () => {
  expect(mergeExtensionWithApi(originalProjectWithSettings)).toEqual(resultProjectWithSettings);
});

test('MS3 Extension and Api examples should be merged together successfully', async () => {
  expect(mergeExtensionWithApi(originalProjectWithExamples)).toEqual(resultProjectWithExamples);
});

test('MS3 Extension and Api datatypes should be merged together successfully', async () => {
  expect(mergeExtensionWithApi(originalProjectWithDataTypes)).toEqual(resultProjectWithDataTypes);
});

test('MS3 Extension and Api traits should be merged together successfully', async () => {
  expect(mergeExtensionWithApi(originalProjectWithTraits)).toEqual(resultProjectWithTraits);
});

test('MS3 Extension and Api resources should be merged together successfully', async () => {
  expect(mergeExtensionWithApi(originalProjectWithResources)).toEqual(resultProjectWithResources);
});

test('MS3 Extension and Api security schemes should be merged together successfully', async () => {
  expect(mergeExtensionWithApi(originalProjectWithSecuritySchemes)).toEqual(resultProjectWithSecuritySchemes);
});