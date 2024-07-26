const Sequelize = require('sequelize');
const config = require('./config.json');

// Crée la connexion à notre base de donnée

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host : config.host,
    dialect : "mysql",
    port : config.port
   
})

module.exports = sequelize;