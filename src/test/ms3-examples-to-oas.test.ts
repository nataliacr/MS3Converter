import MS3toOAS from './../ms3/ms3-to-oas/index';
import { originalExamples, resultExamples } from './files/Project-with-examples';
import { originalExamplesWithReferences, resultExamplesWithReferences } from './files/Project-with-examples';
import ConvertorOptions from './../common/convertor-options-interface';

test('One MS3 resource with headers and query parameters should be converted to OAS successfully', async () => {
  await expect(MS3toOAS.create(originalExamples).convert()).resolves.toEqual(resultExamples);
});

test('One MS3 resource with headers and query parameters should be converted to OAS successfully', async () => {
  const config: ConvertorOptions = {
    fileFormat: 'json',
    asSingleFile: false,
    destinationPath: './'
  };
  await expect(MS3toOAS.create(originalExamplesWithReferences, config).convert()).resolves.toEqual(resultExamplesWithReferences);
});