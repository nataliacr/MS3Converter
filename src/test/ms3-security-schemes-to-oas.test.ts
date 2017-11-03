import MS3toOAS from './../ms3/ms3-to-oas/index';
import { originalOAuth20, resultOAuth20 } from './files/MS3-security-schemes-to-OAS.ts/OAuth20';
import { originalBasicAuth, resultBasicAuth } from './files/MS3-security-schemes-to-OAS.ts/BasicAuthentication';

test('One MS3 resource with headers and query parameters should be converted to OAS successfully', async () => {
  await expect(MS3toOAS.create(originalOAuth20).convert()).resolves.toEqual(resultOAuth20);
});

test('One MS3 resource with headers and query parameters should be converted to OAS successfully', async () => {
  await expect(MS3toOAS.create(originalBasicAuth).convert()).resolves.toEqual(resultBasicAuth);
});