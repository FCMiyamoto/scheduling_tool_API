'use strict'

const sequelize = require('./Sequelize_index').sequelize;
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    id: {
        field: 'id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        field: 'username',
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        field: 'password',
        type: DataTypes.STRING,
        allowNull: false,
        // set(value) {
        //     this.setDataValue('password', hash(value));
        // }
    },
}, {
    timestamps: false,
})

module.exports = User;