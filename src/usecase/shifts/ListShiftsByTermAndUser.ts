import { IShiftRepository } from "../repository/IShiftRepository";

export class ListShiftsByTermAndUser {
    private shiftRepository: IShiftRepository;

    constructor(shiftRepository: IShiftRepository) {
        this.shiftRepository = shiftRepository;
    }

    execute(term_id: number, user_id: number) {
        return this.shiftRepository.findAllByTermAndUser(term_id, user_id);
    }
}