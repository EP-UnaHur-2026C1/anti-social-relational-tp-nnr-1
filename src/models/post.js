'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
   
    static associate(models) {
      Post.hasMany(models.PostImage, {
        foreignKey: 'postId',
        as: 'images',
        onDelete: 'CASCADE' 
      });
      Post.belongsTo(models.User, {
        foreignKey: 'userNickName',
        targetKey: 'nickName', 
        as: 'user'
      });
      Post.belongsToMany(models.Tag, {
        through : models.PostTag, 
        foreignKey : "postId", 
        otherKey : "tagId", 
        as : "etiquetas"
      });
    }
  }
  Post.init({
    description: DataTypes.TEXT,
    userNickName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};