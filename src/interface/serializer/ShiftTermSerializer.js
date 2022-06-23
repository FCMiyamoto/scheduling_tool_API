"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftTermSerializer = void 0;
const _serializeSingleShiftTerm = (shiftTerm) => {
    return {
        id: shiftTerm.id,
        term_start: shiftTerm.term_start,
        term_end: shiftTerm.term_end
    };
};
class ShiftTermSerializer {
    serialize(data) {
        if (!data) {
            throw new Error('expect data to be not undefined nor null');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleShiftTerm);
        }
        return _serializeSingleShiftTerm(data);
    }
}
exports.ShiftTermSerializer = ShiftTermSerializer;
