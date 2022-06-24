import { Shift } from "../../domain/Shift";
import { IShiftRepository } from "../repository/IShiftRepository";

export class UpdateShift {
    private shiftRepository: IShiftRepository;

    constructor(shiftRepository: IShiftRepository) {
        this.shiftRepository = shiftRepository;
    }

    async execute(id: number, term_id: number, status_id: number, day: Date) {
        const shift = await this.shiftRepository.find(id);
        shift.id = id;
        shift.term_id = term_id;
        shift.status_id = status_id;
        shift.day = day;
        return this.shiftRepository.update(shift);
    }
}