'use strict';

require('superagent');

let mugId; 

let baseUrl = 'https://z2tjgvn54c.execute-api.us-east-1.amazonaws.com';
const request = require('superagent');

describe('get', () => {
it('GET route', async () => {
    const response = await request.get(url);
    expect(response).toHaveProperty('status', 200);
    expect(typeof response.body).toEqual('object');
  });
});