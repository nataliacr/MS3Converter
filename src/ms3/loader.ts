import { LoaderInterface } from './../common/loader-interface';
import { apiInterfaces } from '../ms3/index';
import * as fs from 'fs';
import * as util from 'util';
const readFilePromise = util.promisify(fs.readFile);

export class Ms3Loader implements LoaderInterface {

  constructor(private path: string = '') {
    if (!path) throw new Error('Empty path');
  }

  private async readFile(): Promise<string> {
    let fileContent;
    try {
      fileContent = await readFilePromise(this.path, 'utf-8');
    } catch (error) {
      throw new Error(`Error reading Ms3 file: ${error.message}`);
    }
    return fileContent;
  }

  async load(): Promise<apiInterfaces.API> {
    const fileContents = await this.readFile();
    let result;
    try {
      result = JSON.parse(fileContents);
    } catch (error) {
      throw new Error(`Error wrong JSON format: ${error.message}`);
    }
    return result;
  }

  static create(path: string) {
    return new Ms3Loader(path);
  }
}
