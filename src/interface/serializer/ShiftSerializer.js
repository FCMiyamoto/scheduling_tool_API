"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftSerializer = void 0;
const _serializeSingleShift = (shift) => {
    return {
        id: shift.id,
        user_id: shift.user_id,
        term_id: shift.term_id,
        status_id: shift.status_id,
        day: shift.day
    };
};
class ShiftSerializer {
    serialize(data) {
        if (!data) {
            throw new Error('expect data to be not undefined nor null');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleShift);
        }
        return _serializeSingleShift(data);
    }
}
exports.ShiftSerializer = ShiftSerializer;
