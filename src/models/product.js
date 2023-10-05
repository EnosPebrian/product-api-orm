"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Product.belongsTo(models.User, {
      //   as: "user",
      //   foreignKey: "userid",
      // });
    }
  }
  Product.init(
    {
      // id: DataTypes.INTEGER,
      url: DataTypes.TEXT("LONG"),
      product_name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.TEXT("LONG"),
      stock: DataTypes.INTEGER,
      category: DataTypes.STRING,
      userid: DataTypes.INTEGER,
      // createdAt: DataTypes.DATE,
      // updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Product",
      paranoid: true,
    }
  );
  return Product;
};
