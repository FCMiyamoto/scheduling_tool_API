"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftStatus = void 0;
class ShiftStatus {
    constructor(status = 0) {
        this._id = 0;
        this._status = status;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get status() {
        return this._status;
    }
    set status(status) {
        this._status = status;
    }
}
exports.ShiftStatus = ShiftStatus;
