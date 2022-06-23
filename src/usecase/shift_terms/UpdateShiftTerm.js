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
exports.UpdateShiftTerm = void 0;
class UpdateShiftTerm {
    constructor(shiftRepository) {
        this.shiftRepository = shiftRepository;
    }
    execute(id, term_start, term_end) {
        return __awaiter(this, void 0, void 0, function* () {
            const shiftTerm = yield this.shiftRepository.find(id);
            shiftTerm.term_start = term_start;
            shiftTerm.term_end = term_end;
            return this.shiftRepository.update(shiftTerm);
        });
    }
}
exports.UpdateShiftTerm = UpdateShiftTerm;
