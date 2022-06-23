'use strict'

const sequelize = require('./Sequelize_index').sequelize;
const { DataTypes } = require('sequelize');
const Shift = sequelize.define('Shift', {
    id: {
        field: 'id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_id: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        allowNull: false
    },
    term_id: {
        field: 'term_id',
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status_id: {
        field: 'status_id',
        type: DataTypes.INTEGER,
        allowNull: false
    },
    day: {
        field: 'day',
        type: DataTypes.DATEONLY,
        allowNull: false
    },
}, {
    timestamps: false
})

module.exports = Shift;