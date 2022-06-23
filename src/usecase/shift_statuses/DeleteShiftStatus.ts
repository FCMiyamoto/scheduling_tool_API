import { IShiftStatusRepository } from "../repository/IShiftStatusRepository";

export class DeleteShiftStatus {
    private shiftStatusRepository: IShiftStatusRepository;

    constructor(shiftStatusRepository: IShiftStatusRepository) {
        this.shiftStatusRepository = shiftStatusRepository;
    }

    async execute(id: number) {
        const shiftTerm = await this.shiftStatusRepository.find(id);
        return this.shiftStatusRepository.delete(shiftTerm);
    }
}