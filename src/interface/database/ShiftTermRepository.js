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
exports.ShiftTermRepository = void 0;
const ShiftTerm_1 = require("../../domain/ShiftTerm");
const IShiftTermRepository_1 = require("../../usecase/repository/IShiftTermRepository");
class ShiftTermRepository extends IShiftTermRepository_1.IShiftTermRepository {
    constructor(connection) {
        super();
        this.connection = connection;
    }
    convertModel(r) {
        const shiftTerm = new ShiftTerm_1.ShiftTerm();
        shiftTerm.id = r.id;
        shiftTerm.term_start = r.term_start;
        shiftTerm.term_end = r.term_end;
        return shiftTerm;
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute('select * from Shift_Terms where id = ? limit 1', id);
            return this.convertModel(result[0]);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection.execute('select * from Shift_Terms');
            const results = query.map((result) => {
                return this.convertModel(result);
            });
            return results;
        });
    }
    persist(shiftTerm) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = this.connection.execute("insert into Shift_Terms (term_start, term_end) values(?,?)", [shiftTerm.term_start, shiftTerm.term_end]);
            shiftTerm.id = result.id;
            return result;
        });
    }
    update(shiftTerm) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = this.connection.execute("update Shift_Terms set term_start = ? , term_end = ? where id = ?", [shiftTerm.term_start, shiftTerm.term_end, shiftTerm.id]);
            return result;
        });
    }
    delete(shiftTerm) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = this.connection.execute("delete from Shift_Terms where id = ?", shiftTerm.id);
            return this.convertModel(result);
        });
    }
}
exports.ShiftTermRepository = ShiftTermRepository;
