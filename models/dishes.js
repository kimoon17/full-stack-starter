'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dishes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dishes.init(
    {
      food_name: DataTypes.STRING,
      food_image: DataTypes.STRING,
      food_ingredients: DataTypes.TEXT,
      food_instructions: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'dishes',
    }
  );
  return dishes;
};
