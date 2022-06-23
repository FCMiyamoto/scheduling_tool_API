"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetShiftStatus = void 0;
class GetShiftStatus {
    constructor(shiftStatusRepository) {
        this.shiftStatusRepository = shiftStatusRepository;
    }
    execute(id) {
        return this.shiftStatusRepository.find(id);
    }
}
exports.GetShiftStatus = GetShiftStatus;
