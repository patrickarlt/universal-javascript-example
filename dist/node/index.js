/* global fetch */

'use strict';

require('isomorphic-fetch');

require('babel/polyfill');

fetch('https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Neighborhoods_pdx/FeatureServer/0?f=json', {}).then(function (response) {
  return response.json();
}).then(function (json) {
  console.log(json);
});