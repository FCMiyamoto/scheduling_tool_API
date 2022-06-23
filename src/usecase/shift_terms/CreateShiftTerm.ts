import { ShiftTerm } from "../../domain/ShiftTerm";
import { IShiftTermRepository } from "../repository/IShiftTermRepository";

export class CreateShiftTerm {
    private shiftRepository: IShiftTermRepository;

    constructor(shiftRepository: IShiftTermRepository) {
        this.shiftRepository = shiftRepository;
    }

    execute(term_start: Date, term_end: Date) {
        const shiftTerm = new ShiftTerm(term_start, term_end);
        return this.shiftRepository.persist(shiftTerm);
    }
}