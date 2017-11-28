import { find, findIndex, cloneDeep } from 'lodash';

export function mergeArrayOfObjects(extensionObjectsArray: any[], apiObjectsArray: any[], identifier: string): any[] {
  if (!apiObjectsArray) return extensionObjectsArray;
  return apiObjectsArray.reduce( (resultArray: any[], apiObject: any) => {
    const duplicateInExtension = find(resultArray, [identifier, apiObject[identifier]]);

    if (!duplicateInExtension) {
      resultArray.push(apiObject);
    } else {
      const index = findIndex(resultArray, [identifier, apiObject[identifier]]);
      if (duplicateInExtension.annotations) {
        resultArray[index].annotations = mergeArrayOfObjects(resultArray[index].annotations, apiObject.annotations, 'name');
      }
    }

    return resultArray;
  }, cloneDeep(extensionObjectsArray));
}