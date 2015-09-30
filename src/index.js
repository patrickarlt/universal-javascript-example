/* global fetch */

import 'isomorphic-fetch';
import 'babel/polyfill';

export function getMetadata (url) {
  return fetch(`${url}?f=json`).then(function (response) {
    return response.json();
  });
}
