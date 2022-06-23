require('dotenv').config();
const { Sequelize } = require('sequelize');
const my_env = process.env;
const user = my_env.DB_USER;
const database = my_env.DB_DATABASE;
const password = my_env.DB_PASSWORD;
const host = my_env.DB_HOST;
const dialect = my_env.DB_DIALECT;

const sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: dialect
});

module.exports = { sequelize };