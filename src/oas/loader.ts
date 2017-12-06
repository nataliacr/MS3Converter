import { API } from './../ms3/ms3-v1-api-interface';
import LoaderInterface from './../common/loader-interface';
import * as fs from 'fs';
import * as util from 'util';
import { oas30Interface, oas20Interface } from '../oas/index';
import * as YAML from 'yamljs';

const readFilePromise = util.promisify(fs.readFile);

export default class OasLoader implements LoaderInterface {
  constructor(private path: string = '') {
    if (!path) throw new Error('Empty path');
  }

  private parseZip() {

  }

  private async parseJson(): Promise<oas30Interface.API | oas20Interface.API> {
    let fileContent;
    try {
      fileContent = await readFilePromise(this.path, 'utf-8');
      fileContent = JSON.parse(fileContent);
    } catch (error) {
      throw new Error(`Error reading OAS file: ${error.message}`);
    }
    return fileContent;
  }

  async load(): Promise<oas30Interface.API | oas20Interface.API> {
    let result;
    const file = this.path.split('/')[this.path.split('/').length - 1];
    const fileExtension = file.split('.')[file.split('.').length - 1];
    switch (fileExtension) {
      case 'yaml':
        result = YAML.load(this.path);
        break;
      case 'json':
        result = await this.parseJson();
        break;
      case 'zip':
        // result = await this.parseZip();
        break;
      default:
        throw new Error(`Wrong format: ${fileExtension}`);
    }

    return result;
  }

  static create(path: string) {
    return new OasLoader(path);
  }
}
