import { IShiftRepository } from "../repository/IShiftRepository";

export class ListShifts {
    private shiftRepository: IShiftRepository;

    constructor(shiftRepository: IShiftRepository) {
        this.shiftRepository = shiftRepository;
    }

    execute() {
        return this.shiftRepository.findAll();
    }
}