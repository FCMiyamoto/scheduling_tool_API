"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShift = void 0;
const Shift_1 = require("../../domain/Shift");
class CreateShift {
    constructor(shiftRepository) {
        this.shiftRepository = shiftRepository;
    }
    execute(user_id, term_id, status_id, day) {
        const shift = new Shift_1.Shift(user_id, term_id, status_id, day);
        return this.shiftRepository.persist(shift);
    }
}
exports.CreateShift = CreateShift;
