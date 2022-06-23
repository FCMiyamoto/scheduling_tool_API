import { ShiftStatusRepository } from "../database/ShiftStatusRepository";
import { ShiftStatusSerializer } from "../serializer/ShiftStatusSerializer";
import { IDBConnection } from "../database/IDBConnection";
import { ListShiftStatuses } from "../../usecase/shift_statuses/ListShiftStatuses";
import { GetShiftStatus } from "../../usecase/shift_statuses/GetShiftStatus";
import { CreateShiftStatus } from "../../usecase/shift_statuses/CreateShiftStatus";
import { UpdateShiftStatus } from "../../usecase/shift_statuses/UpdateShiftStatus";
import { DeleteShiftStatus } from "../../usecase/shift_statuses/DeleteShiftStatus";

export class ShiftStatusController {
    private shiftStatusSerializer: ShiftStatusSerializer;
    private shiftStatusRepository: ShiftStatusRepository;

    constructor(dbConnection: IDBConnection) {
        this.shiftStatusSerializer = new ShiftStatusSerializer();
        this.shiftStatusRepository = new ShiftStatusRepository(dbConnection);
    }

    async findShiftStatus(req: any, res: any) {
        const id = req.params.id;
        const useCase = new GetShiftStatus(this.shiftStatusRepository);
        const result = await useCase.execute(id);
        return this.shiftStatusSerializer.serialize(result);
    }

    async findShiftStatusAll(req: any, res: any) {
        const useCase = new ListShiftStatuses(this.shiftStatusRepository);
        const results = await useCase.execute();
        return this.shiftStatusSerializer.serialize(results);
    }

    async createShiftStatus(req: any, res: any) {
        const { status } = req.body;
        const useCase = new CreateShiftStatus(this.shiftStatusRepository);
        const result = useCase.execute(status);
        return this.shiftStatusSerializer.serialize(result);
    }

    async updateShiftStatus(req: any, res: any) {
        const id = req.params.id;
        const { status } = req.body;
        const useCase = new UpdateShiftStatus(this.shiftStatusRepository);
        const result = await useCase.execute(id, status);
        return this.shiftStatusSerializer.serialize(result);
    }

    async deleteShiftStatus(req: any, res: any) {
        const id = req.params.id;
        const useCase = new DeleteShiftStatus(this.shiftStatusRepository);
        const result = useCase.execute(id);
        return this.shiftStatusSerializer.serialize(result);
    }
}