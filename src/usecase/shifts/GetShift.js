"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetShift = void 0;
class GetShift {
    constructor(shiftRepository) {
        this.shiftRepository = shiftRepository;
    }
    execute(id) {
        return this.shiftRepository.find(id);
    }
}
exports.GetShift = GetShift;
