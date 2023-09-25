const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://sppbjsgl:I-Qm4rDk4PbCUyl-9zT0yRK0oaesPjh9@babar.db.elephantsql.com/sppbjsgl', {dialect: 'postgres'});

module.exports = sequelize;