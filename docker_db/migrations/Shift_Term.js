'use strict'

const sequelize = require('./Sequelize_index').sequelize;
const { DataTypes } = require('sequelize');
//シフト作成期間を指定
const Shift_Term = sequelize.define('Shift_Term', {
    id: {
        field: 'id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    term_start: {
        field: 'term_start',
        type: DataTypes.DATEONLY,  //year & month
        allowNull: false
    },
    term_end: {
        field: 'term_end',
        type: DataTypes.DATEONLY,  //year & month
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Shift_Term;