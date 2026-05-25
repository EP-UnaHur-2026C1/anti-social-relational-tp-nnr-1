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
      Comment.belongsTo(models.User, {
        foreignKey: 'userNickName',
        targetKey : 'nickName',
        as: 'alias'
      });
      Comment.belongsTo(models.Post,{
        foreignKey: "postId",
        as: "post"
      });

    }
  }
  Comment.init({
    descripcion: {type:DataTypes.STRING,allowNull:false},
    visible: {type:DataTypes.BOOLEAN,defaultValue:true},
    postId: {type:DataTypes.INTEGER,allowNull:false},
    userNickName: {type:DataTypes.STRING,allowNull:false}
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};