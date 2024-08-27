// config/sequelize.js
const Sequelize = require('sequelize');
const config = require('./config.json');

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: 'mysql',
  logging: console.log
});

module.exports = sequelize;

