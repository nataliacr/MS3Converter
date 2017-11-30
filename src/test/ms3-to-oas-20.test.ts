import MS3toOAS from './../ms3/ms3-to-oas/index';
import ConvertorOptions from '../common/convertor-options-interface';
import { ms3Settings, oasSettings } from './files/MS3-to-OAS-20/ms3-settings-to-oas';

test('MS3 settings should be converted to OAS 2.0 successfully', async () => {
  const options: ConvertorOptions = {
    fileFormat: 'json',
    asSingleFile: true,
    oasVersion: '2.0'
  };

  await expect(MS3toOAS.create(ms3Settings, options).convert()).resolves.toEqual(oasSettings);
});