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

  describe('GET /:id', () => {
    it('returns one Dish by id', async () => {
      const response = await testSession.get('/api/dishes/2').expect(HttpStatus.OK);
      const item = response.body;
      assert.deepStrictEqual(item.food_name, 'Test fixture 2');
      assert.deepStrictEqual(item.food_image, 'Test fixture 2');
      assert.deepStrictEqual(item.food_ingredients, 'test fixture 2');
      assert.deepStrictEqual(item.food_instructions, 'test fixture 2');
    });

    it('returns not found for an id not in db', async () => {
      const response = await testSession.get('/api/dishes/0').expect(HttpStatus.NOT_FOUND);
    });
  });
});
