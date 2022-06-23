"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListShiftTerms = void 0;
class ListShiftTerms {
    constructor(shiftRepository) {
        this.shiftRepository = shiftRepository;
    }
    execute() {
        return this.shiftRepository.findAll();
    }
}
exports.ListShiftTerms = ListShiftTerms;
