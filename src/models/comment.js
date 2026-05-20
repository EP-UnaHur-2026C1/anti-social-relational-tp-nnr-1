'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /*Comment.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'alias'
      });
      Comment.belongsTo(models.Post,{
        foreignKey: "postId",
        as: "alias2"
      });
      */
    }
  }
  Comment.init({
    descripcion: {type:DataTypes.STRING,allowNull:false},
    visible: {type:DataTypes.BOOLEAN,defaultValue:true},
    postId: {type:DataTypes.INTEGER,allowNull:false},
    userId: {type:DataTypes.INTEGER,allowNull:false}
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};