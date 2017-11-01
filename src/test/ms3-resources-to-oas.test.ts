import MS3toOAS from './../ms3/ms3-to-oas/index';
import * as ApiInterfaces from './../ms3/ms3-v1-api-interface';
import * as OASInterfaces from './../oas/oas-20-api-interface';
import { originalProject as originalResourcesProject, resultProject as resultResourcesProject } from './files/MS3-resources-to-OAS';

test('MS3 resources should be converted to OAS successfully', async () => {
  await expect(MS3toOAS.create(originalResourcesProject).convert()).resolves.toEqual(resultResourcesProject);
});
