import { ShiftTerm } from "../../domain/ShiftTerm";

const _serializeSingleShiftTerm = (shiftTerm: ShiftTerm) => {
    return {
        id: shiftTerm.id,
        term_start: shiftTerm.term_start,
        term_end: shiftTerm.term_end
    }
}

export class ShiftTermSerializer {
    serialize(data: any) {
        if (!data) {
            throw new Error('expect data to be not undefined nor null');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleShiftTerm);
        }
        return _serializeSingleShiftTerm(data);
    }
}