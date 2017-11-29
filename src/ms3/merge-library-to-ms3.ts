import * as MS3 from '../ms3/ms3-v1-api-interface';
import Extension from '../ms3/ms3-v1-extension-interface';
import Overlay from '../ms3/ms3-v1-overlay-interface';
import { cloneDeep, forEach, map } from 'lodash';
import { Library } from '../ms3/ms3-v1-library-interface';
import { Trait } from '../ms3/ms3-v1-api-interface';

class MergeLibraryToMs3 {
  private libraries: Library[];
  constructor(private API: MS3.API) {}

  checkDuplicates(targetArr: any [], item: any, counter: number = 1): any {
    const propName = item.name ? 'name' : 'title';
    const itemName = map(targetArr, (target: any) => target[propName]);
    if (itemName.indexOf(item[propName]) != -1) {
      item[propName] = `${item[propName]}-${counter}`;
      counter++;
      return this.checkDuplicates(targetArr, item, counter);
    }
    targetArr.push(item);
  }

  mergeProjectParts(project: MS3.API): void {
    this.libraries.reduce( (project: MS3.API, lib: Library): MS3.API => {
      lib.traits.forEach((trait) => this.checkDuplicates(project.traits, trait));
      lib.resourcesTypes.forEach((resourceType) => this.checkDuplicates(project.resourcesTypes, resourceType));
      lib.securitySchemes.forEach((secSchema) => this.checkDuplicates(project.securitySchemes, secSchema));
      lib.annotationTypes.forEach((annotationType) => this.checkDuplicates(project.annotationTypes, annotationType));
      lib.dataTypes.forEach((dataType) => this.checkDuplicates(project.dataTypes, dataType));
      lib.examples.forEach((example) => this.checkDuplicates(project.examples, example));
      return project;
    }, project);
  }

  merge(): MS3.API {
    const project = cloneDeep(this.API);
    this.libraries = project.libraries.map((lib): Library => lib.library);
    delete project.libraries;
    this.mergeProjectParts(project);
    return project;
  }

  static create(api: MS3.API) {
    return new MergeLibraryToMs3(api);
  }
}

export default function mergeLibraryToMs3(API: MS3.API | Extension | Overlay): MS3.API | Extension | Overlay {
  return MergeLibraryToMs3.create(API).merge();
}
