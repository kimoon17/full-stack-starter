const assert = require('assert');

const helper = require('../helper');
const models = require('../../models');

describe('models.Item', () => {
  beforeEach(async () => {
    await helper.loadFixtures([]);
  });

  it('creates a new Item record', async () => {
    let item = models.Item.build({
      Title: 'Test title',
      Text: 'This is a test text!',
    });
    assert.deepStrictEqual(item.id, null);
  });
});
