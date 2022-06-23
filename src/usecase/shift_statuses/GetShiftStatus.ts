import { IShiftStatusRepository } from "../repository/IShiftStatusRepository";

export class GetShiftStatus{
    private shiftStatusRepository: IShiftStatusRepository;

    constructor(shiftStatusRepository: IShiftStatusRepository){
        this.shiftStatusRepository = shiftStatusRepository;
    }

    execute(id: number){
        return this.shiftStatusRepository.find(id);
    }
}