import { ShiftSerializer } from "../serializer/ShiftSerializer";
import { ShiftRepository } from "../database/ShiftRepository";
import { ListShifts } from "../../usecase/shifts/ListShifts";
import { ListShiftsByTerm } from "../../usecase/shifts/ListShiftsByTerm";
import { ListShiftsByTermAndUser } from "../../usecase/shifts/ListShiftsByTermAndUser";
import { GetShift } from "../../usecase/shifts/GetShift";
import { CreateShift } from "../../usecase/shifts/CreateShift";
import { UpdateShift } from "../../usecase/shifts/UpdateShift";
import { DeleteShift } from "../../usecase/shifts/DeleteShift";
import { IDBConnection } from "../database/IDBConnection";

export class ShiftController {
    private shiftSerializer: ShiftSerializer;
    private shiftRepository: ShiftRepository;

    constructor(dbConnection: IDBConnection) {
        this.shiftSerializer = new ShiftSerializer();
        this.shiftRepository = new ShiftRepository(dbConnection);
    }

    async findAll(req: any, res: any) {
        const useCase = new ListShifts(this.shiftRepository);
        const results = await useCase.execute();
        return results;
    }

    async findShift(req: any, res: any) {
        const id = req.params.id;
        const useCase = new GetShift(this.shiftRepository);
        const result = await useCase.execute(id);
        return this.shiftSerializer.serialize(result);
    }

    async findShiftByTerm(req: any, res: any) {
        const term_id = req.params.term_id;
        const useCase = new ListShiftsByTerm(this.shiftRepository);
        const results = await useCase.execute(term_id);
        return this.shiftSerializer.serialize(results);
    }

    async findShiftByTermAndUser(req: any, res: any) {
        const term_id = req.params.term_id;
        const user_id = req.params.user_id;
        const useCase = new ListShiftsByTermAndUser(this.shiftRepository);
        const results = await useCase.execute(term_id, user_id);
        return this.shiftSerializer.serialize(results);
    }

    async createShift(req: any, res: any) {
        const { user_id, term_id, status_id, day } = req.body;
        const useCase = new CreateShift(this.shiftRepository);
        const result = await useCase.execute(user_id, term_id, status_id, day);
        return this.shiftSerializer.serialize(result);
    }

    async updateShift(req: any, res: any) {
        const id = req.params.id;
        const { term_id, status_id, day } = req.body;
        const useCase = new UpdateShift(this.shiftRepository);
        const result = await useCase.execute(id, term_id, status_id, day);
        return this.shiftSerializer.serialize(result);
    }

    async deleteShift(req: any, res: any) {
        const id = req.params.id
        const useCase = new DeleteShift(this.shiftRepository);
        const result = await useCase.execute(id);
        return this.shiftSerializer.serialize(result);
    }
}