const { Model, DataTypes } = require("sequelize");
const sequelize = require('../Config/Sequelize');

class User extends Model {
  static associate(models) {
    User.hasMany(models.Article, { foreignKey: 'user_id' });
    User.hasMany(models.Comment, { foreignKey: 'user_id' });
  }
}

User.init({
    // définissez ici les attributs du modèle User
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = User;

