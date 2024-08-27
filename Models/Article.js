const { Model, DataTypes } = require('sequelize');

class Article extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        // Ajoutez d'autres champs selon vos besoins
      },
      {
        sequelize,
        modelName: 'Article',
        tableName: 'articles',
        timestamps: true,
        underscored: true,
      }
    );
  }

  static associate(models) {
    // Définissez ici vos associations
    // Par exemple:
    // this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}

module.exports = Article;
