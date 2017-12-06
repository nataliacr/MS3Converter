import convertOAS30toMS3 from '../oas/oas-to-ms3/oas-30-to-ms3';
import { oasSettings, ms3Settings } from './files/OAS-30-to-MS3/oas-30-settings-to-ms3';

test('OAS settings should be converted to MS3 successfully', async() => {
  await expect(convertOAS30toMS3(oasSettings)).toEqual(ms3Settings);
});