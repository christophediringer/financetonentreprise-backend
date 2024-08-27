const { Model, DataTypes } = require("sequelize");
const sequelize = require('../Config/Sequelize');

class Comment extends Model {
  static associate(models) {
    Comment.belongsTo(models.User, { foreignKey: 'user_id' });
    Comment.belongsTo(models.Article, { foreignKey: 'article_id' });
  }
}

Comment.init({
    // définissez ici les attributs du modèle Comment
}, {
    sequelize,
    modelName: 'Comment',
    tableName: 'comments',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Comment;
