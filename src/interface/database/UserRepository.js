"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const User_1 = require("../../domain/User");
const IUserRepository_1 = require("../../usecase/repository/IUserRepository");
class UserRepository extends IUserRepository_1.IUserRepository {
    constructor(connection) {
        super();
        this.connection = connection;
    }
    convertModel(r) {
        const user = new User_1.User();
        user.id = r.id;
        user.username = r.username;
        user.password = r.password;
        return user;
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute("select * from Users where id = ?", id);
            return this.convertModel(result[0]);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection.execute("select * from Users");
            const results = query.map((result) => {
                return this.convertModel(result);
            });
            return results;
        });
    }
    persist(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute("insert into Users(username, password) values(?,?)", [user.username, user.password]);
            user.id = result.insertId;
            return result;
        });
    }
    update(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute('update Users set username=?,password=? where id = ?', [user.username, user.password, user.id]);
            return result;
        });
    }
    delete(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute('delete from Users where id = ?', user.id);
            return this.convertModel(user);
        });
    }
}
exports.UserRepository = UserRepository;
