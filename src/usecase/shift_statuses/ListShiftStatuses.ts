import { IShiftStatusRepository } from "../repository/IShiftStatusRepository";

export class ListShiftStatuses {
    private shiftStatusRepository: IShiftStatusRepository;

    constructor(shiftStatusRepository: IShiftStatusRepository) {
        this.shiftStatusRepository = shiftStatusRepository;
    }

    execute() {
        return this.shiftStatusRepository.findAll();
    }
}