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
exports.ShiftStatusRepository = void 0;
const ShiftStatus_1 = require("../../domain/ShiftStatus");
const IShiftStatusRepository_1 = require("../../usecase/repository/IShiftStatusRepository");
class ShiftStatusRepository extends IShiftStatusRepository_1.IShiftStatusRepository {
    constructor(connection) {
        super();
        this.connection = connection;
    }
    convertModel(r) {
        const shiftStatus = new ShiftStatus_1.ShiftStatus();
        shiftStatus.id = r.id;
        shiftStatus.status = r.status;
        return shiftStatus;
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute("select * from Shift_Statuses where id = ?", id);
            return result[0];
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection.execute("select * from Shift_Statuses");
            const results = query.map((result) => {
                return this.convertModel(result);
            });
            return results;
        });
    }
    persist(shiftStatus) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute("insert into Shift_Statuses (status) values(?)", shiftStatus.status);
            shiftStatus.id = result.id;
            return result;
        });
    }
    update(shiftStatus) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute('update Shift_Statuses set status = ? where id = ?', [shiftStatus.status, shiftStatus.id]);
            return result;
        });
    }
    delete(shiftStatus) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute("delete from Shift_Statuses where id = ?", shiftStatus.id);
            return result;
        });
    }
}
exports.ShiftStatusRepository = ShiftStatusRepository;
