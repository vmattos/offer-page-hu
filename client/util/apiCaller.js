import fetch from 'isomorphic-fetch';
import Config from '../../server/config';

export const API_URL = (function getApiUrl() { // eslint-disable-line
  const isServer = typeof window === 'undefined';
  const isTest = process.env.NODE_ENV === 'test';
  if (isServer || isTest) {
    return process.env.BASE_URL || (`http://localhost:${process.env.PORT || Config.port}/api`);
  }
  return '/api';
})();

export default function callApi(endpoint, method = 'get', body) {
  return fetch(`${API_URL}/${endpoint}`, {
    headers: { 'content-type': 'application/json' },
    method,
    body: JSON.stringify(body),
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }

    return json;
  })
  .then(
    response => response,
    error => error
  );
}
