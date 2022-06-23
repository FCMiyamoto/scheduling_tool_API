const dayjs = require('dayjs');

export class ShiftTerm {
    private _id: number = 0;
    private _termStart: Date;
    private _termEnd: Date;

    constructor(term_start: Date = dayjs(), term_end: Date = dayjs()) {
        this._termStart = term_start;
        this._termEnd = term_end;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get term_start(): Date {
        return this._termStart;
    }

    set term_start(term_start: Date) {
        this._termStart = term_start;
    }

    get term_end(): Date {
        return this._termEnd;
    }

    set term_end(term_end: Date) {
        this._termEnd = term_end;
    }
}