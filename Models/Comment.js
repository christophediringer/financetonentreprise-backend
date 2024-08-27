const { Model, DataTypes } = require("sequelize");
const User = require('./User');
const Article = require('./Article');

import Sequelize from "sequelize";

class Comments extends Model {}

Comments.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    article_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    is_published: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    commenter_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    Sequelize,
    modelName: "Comments",
    tableName: "Comments",
    timestamps: false
});

Comments.belongsTo(User, { foreignKey: 'user_id' });
Comments.belongsTo(Article, { foreignKey: 'article_id' });

module.exports = Comments;
