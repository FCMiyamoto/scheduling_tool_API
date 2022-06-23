'use strict'

const sequelize = require('./Sequelize_index').sequelize;
const { DataTypes } = require('sequelize');
const Shift_Status = sequelize.define('Shift_Status', {
    id: {
        field: 'id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    status: {
        field: 'status',
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Shift_Status;