const dayjs = require('dayjs');

export class Shift {
    private _id: number = 0;
    private _userId: number;
    private _termId: number;
    private _statusId: number;
    private _day: Date;

    constructor(user_id: number = 0, term_id: number = 0, status_id: number = 0, day: Date = dayjs()) {
        this._userId = user_id;
        this._termId = term_id;
        this._statusId = status_id;
        this._day = day;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get user_id(): number {
        return this._userId;
    }

    set user_id(user_id: number) {
        this._userId = user_id;
    }

    get term_id(): number {
        return this._termId;
    }

    set term_id(term_id: number) {
        this._termId = term_id;
    }

    get status_id(): number {
        return this._statusId;
    }

    set status_id(status_id: number) {
        this._statusId = status_id;
    }

    get day(): Date {
        return this._day;
    }

    set day(day: Date) {
        this._day = day;
    }
}