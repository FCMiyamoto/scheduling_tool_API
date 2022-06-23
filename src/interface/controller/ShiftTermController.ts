import { ShiftTermRepository } from "../database/ShiftTermRepository";
import { IDBConnection } from "../database/IDBConnection";
import { ShiftTermSerializer } from "../serializer/ShiftTermSerializer";
import { ListShiftTerms } from "../../usecase/shift_terms/ListShiftTerms";
import { GetShiftTerm } from "../../usecase/shift_terms/GetShiftTerm";
import { CreateShiftTerm } from "../../usecase/shift_terms/CreateShiftTerm";
import { UpdateShiftTerm } from "../../usecase/shift_terms/UpdateShiftTerm";
import { DeleteShiftTerm } from "../../usecase/shift_terms/DeleteShiftTerm";

export class ShiftTermController {
    private shiftTermSerializer: ShiftTermSerializer;
    private shiftTermRepository: ShiftTermRepository;

    constructor(dbConnection: IDBConnection) {
        this.shiftTermSerializer = new ShiftTermSerializer();
        this.shiftTermRepository = new ShiftTermRepository(dbConnection);
    }

    async findShiftTerm(req: any, res: any) {
        const id = req.params.id;
        const useCase = new GetShiftTerm(this.shiftTermRepository);
        const result = await useCase.execute(id);
        return this.shiftTermSerializer.serialize(result);
    }

    async findShiftTermAll(req: any, res: any) {
        const useCase = new ListShiftTerms(this.shiftTermRepository);
        const results = await useCase.execute();
        return this.shiftTermSerializer.serialize(results)
    }

    async createShiftTerm(req: any, res: any) {
        const { term_start, term_end } = req.body;
        const useCase = new CreateShiftTerm(this.shiftTermRepository);
        const result = await useCase.execute(term_start, term_end);
        return this.shiftTermSerializer.serialize(result);
    }

    async updateShiftTerm(req: any, res: any) {
        const id = req.params.id;
        const { term_start, term_end } = req.body;
        const useCase = new UpdateShiftTerm(this.shiftTermRepository);
        const result = await useCase.execute(id, term_start, term_end);
        return this.shiftTermSerializer.serialize(result);
    }

    async deleteShiftTerm(req: any, res: any) {
        const id = req.params.id;
        const useCase = new DeleteShiftTerm(this.shiftTermRepository);
        const result = await useCase.execute(id);
        return this.shiftTermSerializer.serialize(result);
    }
}