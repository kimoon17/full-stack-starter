const assert = require('assert');

const helper = require('../helper');
const models = require('../../models');

describe('models.dishes', () => {
  beforeEach(async () => {
    await helper.loadFixtures(['dishes']);
  });

  it('creates a new Item record', async () => {
    let dishes = models.dishes.build({
      food_name: 'Test title',
      food_image: 'Test image',
      food_description: 'Test desc',
      food_instructions: 'Test inst',
    });
    assert.deepStrictEqual(dishes.food_name, 'Test title');
  });
  it('fetches all the items', async () => {
    const results = await models.dishes.findAll();
    assert.deepStrictEqual(results.length, 2);
  });
});
