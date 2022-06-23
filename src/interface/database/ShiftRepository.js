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
exports.ShiftRepository = void 0;
const Shift_1 = require("../../domain/Shift");
const IShiftRepository_1 = require("../../usecase/repository/IShiftRepository");
class ShiftRepository extends IShiftRepository_1.IShiftRepository {
    constructor(connection) {
        super();
        this.connection = connection;
    }
    convertModel(r) {
        const shift = new Shift_1.Shift();
        shift.id = r.id;
        shift.user_id = r.user_id;
        shift.term_id = r.term_id;
        shift.status_id = r.status_id;
        shift.day = r.day;
        return shift;
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute("select * from Shifts where id = ?", id);
            return this.convertModel(result[0]);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection.execute("select * from Shifts");
            const results = query.map((result) => {
                return this.convertModel(result);
            });
            return results;
        });
    }
    findAllByTerm(term_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection.execute("select * from Shifts where term_id = ?", term_id);
            const results = query.map((result) => {
                return this.convertModel(result);
            });
            return results;
        });
    }
    findAllByTermAndUser(term_id, user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection.execute("select * from Shifts where term_id = ? && user_id = ?", [term_id, user_id]);
            const results = query.map((result) => {
                return this.convertModel(result);
            });
            return results;
        });
    }
    persist(shift) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute("insert into Shifts (user_id,term_id, status_id, day) values(?,?,?,?)", [shift.user_id, shift.term_id, shift.status_id, shift.day]);
            shift.id = result.id;
            return result;
        });
    }
    update(shift) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute("update Shifts set status_id = ?, day = ? where id = ?", [shift.status_id, shift.day, shift.id]);
            return result;
        });
    }
    delete(shift) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute("delete from Shifts where id = ?", shift.id);
            return this.convertModel(result);
        });
    }
}
exports.ShiftRepository = ShiftRepository;
