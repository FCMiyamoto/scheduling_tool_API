export class ShiftStatus {
    private _id: number = 0;
    private _status: number;

    constructor(status: number = 0) {
        this._status = status;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get status(): number {
        return this._status;
    }

    set status(status: number) {
        this._status = status;
    }
}