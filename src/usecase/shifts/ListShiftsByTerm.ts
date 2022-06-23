import { IShiftRepository } from "../repository/IShiftRepository";

export class ListShiftsByTerm {
    private shiftRepository: IShiftRepository;

    constructor(shiftRepository: IShiftRepository) {
        this.shiftRepository = shiftRepository;
    }

    execute(term_id: number) {
        return this.shiftRepository.findAllByTerm(term_id);
    }
}