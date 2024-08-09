const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodeofsql', 'root', 'Nick@root21', {
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;