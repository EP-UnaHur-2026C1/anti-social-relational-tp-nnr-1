const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },
  description: {
    type: DataTypes.STRING, 
    allowNull: false
  },
  userNickName: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Posts',
  timestamps: true
});

// Entidad Post_Images
const PostImage = sequelize.define('PostImage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: true 
    }
  }
}, {
  tableName: 'Post_Images',
  timestamps: false
});

// Definición de la relación Uno a Muchos (1:N) entre Post y Post_Images
Post.hasMany(PostImage, { 
  as: 'images', 
  foreignKey: 'postId', 
  onDelete: 'CASCADE' 
});
PostImage.belongsTo(Post, { 
  foreignKey: 'postId' 
});

module.exports = { Post, PostImage };