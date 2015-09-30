import test from 'tape';
import { getMetadata } from '../src/index.js';

test('should get metadata for a feature service', function (t) {
  t.plan(1);

  getMetadata('https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Neighborhoods_pdx/FeatureServer/0').then(function (response) {
    t.equal(response.name, 'Neighborhoods_pdx');
  });
});

test('teardown', function (t) {
  t.plan(1);
  t.pass('teardown');

  // if we are in a browser close the window to end the tests
  if (typeof window !== 'undefined') {
    window.close();
  }
});
