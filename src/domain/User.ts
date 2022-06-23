export class User {
    private _id: number = 0;
    private _username: string;
    private _password: string;

    constructor(username: string = '', password: string = '') {
        this._username = username;
        this._password = password;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get username(): string {
        return this._username;
    }

    set username(username: string) {
        this._username = username;
    }

    get password(): string {
        return this._password;
    }

    set password(password: string) {
        this._password = password;
    }
}