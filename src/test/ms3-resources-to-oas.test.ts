import MS3toOAS from './../ms3/ms3-to-oas/index';
import * as ApiInterfaces from './../ms3/ms3-v1-api-interface';
import * as OASInterfaces from './../oas/oas-20-api-interface';
import { originalResourceWithParameters, resultResourceWithParameters } from './files/MS1-resources-to-OAS/resource-with-parameters';
import { originalNestedResources, resultNestedResources } from './files/MS1-resources-to-OAS/nested-resources';
import { originalResourceWithRequestBody, resultResourceWithRequestBody } from './files/MS1-resources-to-OAS/resource-with-request-body';
import { originalResourceWithResponses, resultResourceWithResponses } from './files/MS1-resources-to-OAS/resource-with-responses';
import { originalResourceWithSecuredBy, resultResourceWithSecuredBy } from './files/MS1-resources-to-OAS/resource-with-securedBy';

test('One MS3 resource with headers and query parameters should be converted to OAS successfully', async () => {
  await expect(MS3toOAS.create(originalResourceWithParameters).convert()).resolves.toEqual(resultResourceWithParameters);
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

test('MS3 resources with responses should be converted to OAS successfully', async () => {
  await expect(MS3toOAS.create(originalResourceWithSecuredBy).convert()).resolves.toEqual(resultResourceWithSecuredBy);
});
