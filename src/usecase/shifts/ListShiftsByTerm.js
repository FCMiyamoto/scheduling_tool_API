"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListShiftsByTerm = void 0;
class ListShiftsByTerm {
    constructor(shiftRepository) {
        this.shiftRepository = shiftRepository;
    }
    execute(term_id) {
        return this.shiftRepository.findAllByTerm(term_id);
    }
}
exports.ListShiftsByTerm = ListShiftsByTerm;
