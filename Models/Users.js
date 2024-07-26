const { Model, DataTypes } = require("sequelize");
const sequelize = require('../Config/Sequelize');

class Users extends Model {}

Users.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('user', 'admin', 'broker'),
        allowNull: false,
        defaultValue: 'user'
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    identity_document: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    other: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    password_reset_token: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    password_reset_expires: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    modelName: "Users",
    tableName: "Users",
    timestamps: false
});

module.exports = Users;