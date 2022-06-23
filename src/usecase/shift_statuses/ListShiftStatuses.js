"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListShiftStatuses = void 0;
class ListShiftStatuses {
    constructor(shiftStatusRepository) {
        this.shiftStatusRepository = shiftStatusRepository;
    }
    execute() {
        return this.shiftStatusRepository.findAll();
    }
}
exports.ListShiftStatuses = ListShiftStatuses;
