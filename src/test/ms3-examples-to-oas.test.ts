import MS3toOAS from './../ms3/ms3-to-oas/index';
import { originalExamples, resultExamples, resultExamplesWithReferences } from './files/Project-with-examples';
import ConvertorOptions from './../common/convertor-options-interface';

test('MS3 examples should be converted to OAS and included inline successfully', async () => {
  await expect(MS3toOAS.create(originalExamples).convert()).resolves.toEqual(resultExamples);
});

// test('MS3 examples should be converted as external files to OAS successfully', async () => {
//   const config: ConvertorOptions = {
//     fileFormat: 'json',
//     asSingleFile: false,
//     destinationPath: './'
//   };
//   await expect(MS3toOAS.create(originalExamples, config).convert()).resolves.toEqual(resultExamplesWithReferences);
// });