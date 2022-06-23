import { IShiftTermRepository } from "../repository/IShiftTermRepository";

export class UpdateShiftTerm {
    private shiftRepository: IShiftTermRepository;

    constructor(shiftRepository: IShiftTermRepository) {
        this.shiftRepository = shiftRepository;
    }

    async execute(id: number, term_start: Date, term_end: Date) {
        const shiftTerm = await this.shiftRepository.find(id);
        shiftTerm.term_start = term_start;
        shiftTerm.term_end = term_end;
        return this.shiftRepository.update(shiftTerm);
    }
}