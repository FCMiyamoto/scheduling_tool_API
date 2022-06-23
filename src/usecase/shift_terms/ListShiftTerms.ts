import { IShiftTermRepository } from "../repository/IShiftTermRepository";

export class ListShiftTerms {
    private shiftRepository: IShiftTermRepository;

    constructor(shiftRepository: IShiftTermRepository) {
        this.shiftRepository = shiftRepository;
    }

    execute() {
        return this.shiftRepository.findAll();
    }
}