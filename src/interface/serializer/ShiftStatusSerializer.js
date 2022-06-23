"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftStatusSerializer = void 0;
const _serializerSingleShiftStatus = (shiftStatus) => {
    return {
        id: shiftStatus.id,
        status: shiftStatus.status
    };
};
class ShiftStatusSerializer {
    serialize(data) {
        if (!data) {
            throw new Error('expect data to be not undefined nor null');
        }
        if (Array.isArray(data)) {
            return data.map(_serializerSingleShiftStatus);
        }
        return _serializerSingleShiftStatus(data);
    }
}
exports.ShiftStatusSerializer = ShiftStatusSerializer;
