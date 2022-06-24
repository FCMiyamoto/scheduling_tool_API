import { resourceUsage } from "process";
import { Shift } from "../../domain/Shift";
import { IShiftRepository } from "../repository/IShiftRepository";

export class DeleteShift {
    private shiftRepository: IShiftRepository;

    constructor(shiftRepository: IShiftRepository) {
        this.shiftRepository = shiftRepository;
    }

    async execute(id: number) {
        const shift = await this.shiftRepository.delete(id);
        return shift;
    }
}