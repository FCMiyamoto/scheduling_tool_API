import { IShiftTermRepository } from "../repository/IShiftTermRepository";

export class GetShiftTerm {
    private shiftRepository: IShiftTermRepository;

    constructor(shiftRepository: IShiftTermRepository) {
        this.shiftRepository = shiftRepository;
    }

    execute(id: number) {
        return this.shiftRepository.find(id);
    }
}