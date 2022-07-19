const assert = require('assert');
const HttpStatus = require('http-status-codes');
const _ = require('lodash');
const session = require('supertest-session');

const helper = require('../../helper');
const app = require('../../../app');
const models = require('../../../models');

describe('/api/dishes', () => {
  let testSession;

  beforeEach(async () => {
    await helper.loadFixtures(['dishes', 'users']);
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
  context('authenticated', () => {
    beforeEach(async () => {
      await testSession
        .post('/api/auth/login')
        .set('Accept', 'application/json')
        .send({ email: 'admin.user@test.com', password: 'abcd1234' })
        .expect(HttpStatus.OK);
    });

    describe('POST /', () => {
      it('creates a new Item', async () => {
        const response = await testSession
          .post('/api/dishes')
          .set('Accept', 'application/json')
          .send({
            food_name: 'Pancakes',
            food_image: '',
            food_ingredients: 'chocolate chips, milk, flour',
            food_instructions: 'mix and eat.',
          })
          .expect(HttpStatus.CREATED);

        const { id, food_name, food_image, food_ingredients, food_instructions } = response.body;
        assert(id);
        assert.deepStrictEqual(food_name, 'Pancakes');
        assert.deepStrictEqual(food_image, '');
        assert.deepStrictEqual(food_ingredients, 'chocolate chips, milk, flour');
        assert.deepStrictEqual(food_instructions, 'mix and eat.');

        const item = await models.dishes.findByPk(id);
        assert(item);
        assert.deepStrictEqual(item.food_name, 'Pancakes');
        assert.deepStrictEqual(item.food_image, '');
        assert.deepStrictEqual(item.food_ingredients, 'chocolate chips, milk, flour');
        assert.deepStrictEqual(item.food_instructions, 'mix and eat.');
      });
    });
  });
});
