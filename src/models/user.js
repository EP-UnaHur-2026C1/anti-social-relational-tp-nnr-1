'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, {
        foreignKey : "userNickName", 
        sourceKey : "nickName",
        as : "posts"
      });
      User.hasMany(models.Comment, {
        foreignKey: "userNickName", 
        sourceKey : "nickName",
        as :"comments"
      })
    }
  }
  User.init({
    nickName: {
      type : DataTypes.STRING, 
      unique : true
    },
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
