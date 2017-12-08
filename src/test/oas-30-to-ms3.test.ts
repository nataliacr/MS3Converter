import convertOAS30toMS3 from '../oas/oas-to-ms3/oas-30-to-ms3';
import { oasSettings, ms3Settings } from './files/OAS-30-to-MS3/oas-30-settings-to-ms3';
import { oasPathsWithParameters, ms3ResourcesWithParameters } from './files/OAS-30-to-MS3/oas-30-resources-parameters-to-ms3';
import { oasPathsWithRequestBody, ms3ResourcesWithRequestBody } from './files/OAS-30-to-MS3/oas-30-resources-request-body-to-ms3';

test('OAS settings should be converted to MS3 successfully', async() => {
  expect(convertOAS30toMS3(oasSettings)).toEqual(ms3Settings);
});

test('OAS paths with parameters should be converted to MS3 resources successfully', async() => {
  expect(convertOAS30toMS3(oasPathsWithParameters)).toEqual(ms3ResourcesWithParameters);
});

test('OAS paths with request body should be converted to MS3 resources successfully', async() => {
  expect(convertOAS30toMS3(oasPathsWithRequestBody)).toEqual(ms3ResourcesWithRequestBody);
});