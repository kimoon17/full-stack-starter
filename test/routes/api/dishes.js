const assert = require('assert');
const HttpStatus = require('http-status-codes');
const _ = require('lodash');
const session = require('supertest-session');

const helper = require('../../helper');
const app = require('../../../app');

describe('/api/dishes', () => {
  let testSession;

  beforeEach(async () => {
    await helper.loadFixtures(['dishes']);
    testSession = session(app);
  });

  describe('GET /', () => {
    it('returns a list of dishes', async () => {
      console.log('hello jackson');
      const response = await testSession.get('/api/dishes').expect(HttpStatus.OK);
      const items = response.body;
      assert(items.length, 2);
      console.log(items);
    });
  });
});
