"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListShifts = void 0;
class ListShifts {
    constructor(shiftRepository) {
        this.shiftRepository = shiftRepository;
    }
    execute() {
        return this.shiftRepository.findAll();
    }
}
exports.ListShifts = ListShifts;
