import mergeTypesAndTraits from './../ms3/ms3-to-oas/merge-resource-types-and-traits';
import { originalProjectWithResourcesTypes, resultProjectWithResourcesTypes } from './files/Merge-resources-and-resourcesTypes/merge-resourceTypes';

test('MS3 resources and resourcesTypes should be merged successfully', async () => {
  expect(mergeTypesAndTraits(originalProjectWithResourcesTypes)).toEqual(resultProjectWithResourcesTypes);
});