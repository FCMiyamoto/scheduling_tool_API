"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListShiftsByTermAndUser = void 0;
class ListShiftsByTermAndUser {
    constructor(shiftRepository) {
        this.shiftRepository = shiftRepository;
    }
    execute(term_id, user_id) {
        return this.shiftRepository.findAllByTermAndUser(term_id, user_id);
    }
}
exports.ListShiftsByTermAndUser = ListShiftsByTermAndUser;
