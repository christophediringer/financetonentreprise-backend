const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Category = require('./Category');

class Content extends Model {}

Content.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Content',
    tableName: 'contents',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

Content.belongsTo(User, { foreignKey: 'user_id' });
Content.belongsTo(Category, { foreignKey: 'category_id' });

module.exports = Content;