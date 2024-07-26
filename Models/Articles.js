const { Model, DataTypes } = require("sequelize");
const sequelize = require('../Config/Sequelize');

class Article extends Model {}

Article.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Article',
    tableName: 'articles',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

Article.belongsTo(User, { foreignKey: 'user_id' });

//  Cette ligne établit explicitement une relation entre le modèle Article et le modèle User. Elle indique que chaque article appartient à un utilisateur.

module.exports = Article;