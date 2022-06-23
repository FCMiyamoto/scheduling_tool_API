import { IShiftRepository } from "../repository/IShiftRepository";

export class GetShift {
    private shiftRepository: IShiftRepository;

    constructor(shiftRepository: IShiftRepository) {
        this.shiftRepository = shiftRepository;
    }

    execute(id: number) {
        return this.shiftRepository.find(id);
    }
}