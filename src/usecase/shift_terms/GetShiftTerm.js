"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetShiftTerm = void 0;
class GetShiftTerm {
    constructor(shiftRepository) {
        this.shiftRepository = shiftRepository;
    }
    execute(id) {
        return this.shiftRepository.find(id);
    }
}
exports.GetShiftTerm = GetShiftTerm;
