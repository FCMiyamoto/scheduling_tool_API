import { IShiftStatusRepository } from "../repository/IShiftStatusRepository";

export class UpdateShiftStatus {
    private shiftStatusRepository: IShiftStatusRepository;

    constructor(shiftStatusRepository: IShiftStatusRepository) {
        this.shiftStatusRepository = shiftStatusRepository;
    }

    async execute(id: number, status: number) {
        const shiftStatus = await this.shiftStatusRepository.find(id);
        shiftStatus.id = id;
        shiftStatus.status = status
        return this.shiftStatusRepository.update(shiftStatus);
    }
}