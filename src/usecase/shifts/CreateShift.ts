import { Shift } from "../../domain/Shift";
import { IShiftRepository } from "../repository/IShiftRepository";

export class CreateShift {
    private shiftRepository: IShiftRepository;

    constructor(shiftRepository: IShiftRepository) {
        this.shiftRepository = shiftRepository;
    }

    execute(user_id: number, term_id: number, status_id: number, day: Date) {
        const shift = new Shift(user_id, term_id, status_id, day);
        return this.shiftRepository.persist(shift);
    }
}