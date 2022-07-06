const assert = require('assert');

const helper = require('../helper');
const models = require('../../models');

describe('models.dishes', () => {
  beforeEach(async () => {
    await helper.loadFixtures([]);
  });

  it('creates a new Item record', async () => {
    let dishes = models.dishes.build({
      food_name: 'Test title',
    });
    assert.deepStrictEqual(dishes.food_name, 'Test title');
  });
});
