import { IShiftStatusRepository } from "../repository/IShiftStatusRepository";

export class DeleteShiftStatus {
    private shiftStatusRepository: IShiftStatusRepository;

    constructor(shiftStatusRepository: IShiftStatusRepository) {
        this.shiftStatusRepository = shiftStatusRepository;
    }

    async execute(id: number) {
        const shiftStatus = await this.shiftStatusRepository.delete(id);
        return shiftStatus;
    }
}