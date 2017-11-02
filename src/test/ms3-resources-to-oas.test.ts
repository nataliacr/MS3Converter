import MS3toOAS from './../ms3/ms3-to-oas/index';
import * as ApiInterfaces from './../ms3/ms3-v1-api-interface';
import * as OASInterfaces from './../oas/oas-20-api-interface';
import { originalResourcesWithRequestBody, resultResourcesWithRequestBody } from './files/MS3-resources-to-OAS';
import { originalNestedResources, resultNestedResources } from './files/MS3-resources-to-OAS';
import { originalResourceWithRequestBody, resultResourceWithRequestBody } from './files/MS3-resources-to-OAS';
import { originalResourceWithResponses, resultResourceWithResponses } from './files/MS3-resources-to-OAS';

test('One MS3 resource with headers and query parameters should be converted to OAS successfully', async () => {
  await expect(MS3toOAS.create(originalResourcesWithRequestBody).convert()).resolves.toEqual(resultResourcesWithRequestBody);
});

test('Nested MS3 resources should be converted to OAS successfully', async () => {
  await expect(MS3toOAS.create(originalNestedResources).convert()).resolves.toEqual(resultNestedResources);
});

test('MS3 resources with bodies should be converted to OAS successfully', async () => {
  await expect(MS3toOAS.create(originalResourceWithRequestBody).convert()).resolves.toEqual(resultResourceWithRequestBody);
});

test('MS3 resources with responses should be converted to OAS successfully', async () => {
  await expect(MS3toOAS.create(originalResourceWithResponses).convert()).resolves.toEqual(resultResourceWithResponses);
});
