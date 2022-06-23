"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shift = void 0;
const dayjs = require('dayjs');
class Shift {
    constructor(user_id = 0, term_id = 0, status_id = 0, day = dayjs()) {
        this._id = 0;
        this._userId = user_id;
        this._termId = term_id;
        this._statusId = status_id;
        this._day = day;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get user_id() {
        return this._userId;
    }
    set user_id(user_id) {
        this._userId = user_id;
    }
    get term_id() {
        return this._termId;
    }
    set term_id(term_id) {
        this._termId = term_id;
    }
    get status_id() {
        return this._statusId;
    }
    set status_id(status_id) {
        this._statusId = status_id;
    }
    get day() {
        return this._day;
    }
    set day(day) {
        this._day = day;
    }
}
exports.Shift = Shift;
