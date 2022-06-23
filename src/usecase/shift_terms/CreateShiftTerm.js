"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShiftTerm = void 0;
const ShiftTerm_1 = require("../../domain/ShiftTerm");
class CreateShiftTerm {
    constructor(shiftRepository) {
        this.shiftRepository = shiftRepository;
    }
    execute(term_start, term_end) {
        const shiftTerm = new ShiftTerm_1.ShiftTerm(term_start, term_end);
        return this.shiftRepository.persist(shiftTerm);
    }
}
exports.CreateShiftTerm = CreateShiftTerm;
