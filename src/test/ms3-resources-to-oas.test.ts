import MS3toOAS from './../ms3/ms3-to-oas/index';
import * as ApiInterfaces from './../ms3/ms3-v1-api-interface';
import * as OASInterfaces from './../oas/oas-20-api-interface';
import { originalResourcesWithRequestBody, resultResourcesWithRequestBody } from './files/MS3-resources-to-OAS';

test('One MS3 resource with headers and quuery parameters should be converted to OAS successfully', async () => {
  await expect(MS3toOAS.create(originalResourcesWithRequestBody).convert()).resolves.toEqual(resultResourcesWithRequestBody);
});
