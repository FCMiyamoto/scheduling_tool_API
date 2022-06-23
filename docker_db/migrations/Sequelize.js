'use strict'

//table作成実行ファイル
const sequelize = require('./Sequelize_index').sequelize;
const User = require('./User');
const Shift = require('./Shift');
const Shift_Term = require('./Shift_Term');
const Shift_Status = require('./Shift_Status');

(async () => {
    try {
        //DB間の紐付け
        await User.hasMany(Shift, {
            foreignKey: 'user_id',
        });
        await Shift_Term.hasMany(Shift, {
            foreignKey: 'term_id',
        })
        await Shift_Status.hasMany(Shift, {
            foreignKey: 'status_id',
        })
        await Shift.belongsTo(User, {
            foreignKey: 'user_id',
            targetKey: 'id'
        });
        await Shift.belongsTo(Shift_Term, {
            foreignKey: 'term_id',
            targetKey: 'id'
        });
        await Shift.belongsTo(Shift_Status, {
            foreignKey: 'status_id',
            targetKey: 'id'
        });

        //Table削除
        await Shift.drop();
        await User.drop();
        await Shift_Status.drop();
        await Shift_Term.drop();

        //Table作成
        await User.sync({ alter: true });
        await Shift_Term.sync({ alter: true });
        await Shift_Status.sync({ alter: true });
        await Shift.sync({ alter: true });
        // await User.sync({ force: true });
        // await Shift_Term.sync({ force: true });
        // await Shift_Status.sync({ force: true });
        // await Shift.sync({ force: true });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();