"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShiftStatus = void 0;
const ShiftStatus_1 = require("../../domain/ShiftStatus");
class CreateShiftStatus {
    constructor(shiftStatusRepository) {
        this.shiftStatusRepository = shiftStatusRepository;
    }
    execute(status) {
        const shiftStatus = new ShiftStatus_1.ShiftStatus(status);
        return this.shiftStatusRepository.persist(shiftStatus);
    }
}
exports.CreateShiftStatus = CreateShiftStatus;
