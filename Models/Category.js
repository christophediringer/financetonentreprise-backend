const { Model, DataTypes } = require('sequelize');

class Category extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: 'Category',
        tableName: 'categories',
        timestamps: true,
        underscored: true,
      }
    );
  }

  static associate(models) {
    // Définissez ici vos associations
    // Par exemple:
    // this.hasMany(models.Article, { foreignKey: 'category_id' });
  }
}

module.exports = Category;
