"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftTerm = void 0;
const dayjs = require('dayjs');
class ShiftTerm {
    constructor(term_start = dayjs(), term_end = dayjs()) {
        this._id = 0;
        this._termStart = term_start;
        this._termEnd = term_end;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get term_start() {
        return this._termStart;
    }
    set term_start(term_start) {
        this._termStart = term_start;
    }
    get term_end() {
        return this._termEnd;
    }
    set term_end(term_end) {
        this._termEnd = term_end;
    }
}
exports.ShiftTerm = ShiftTerm;
