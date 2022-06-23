import { ShiftStatus } from "../../domain/ShiftStatus";

const _serializerSingleShiftStatus = (shiftStatus: ShiftStatus) => {
    return {
        id: shiftStatus.id,
        status: shiftStatus.status
    }
}

export class ShiftStatusSerializer {
    serialize(data: any) {
        if (!data) {
            throw new Error('expect data to be not undefined nor null');
        }
        if (Array.isArray(data)) {
            return data.map(_serializerSingleShiftStatus);
        }
        return _serializerSingleShiftStatus(data);
    }
}