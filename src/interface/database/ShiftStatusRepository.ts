import { ShiftStatus } from "../../domain/ShiftStatus";
import { IShiftStatusRepository } from "../../usecase/repository/IShiftStatusRepository";
import { IDBConnection } from "./IDBConnection";

export class ShiftStatusRepository extends IShiftStatusRepository {
    private connection: any;

    constructor(connection: IDBConnection) {
        super();
        this.connection = connection;
    }

    private convertModel(r: any) {
        const shiftStatus = new ShiftStatus();
        shiftStatus.id = r.id;
        shiftStatus.status = r.status;
        return shiftStatus;
    }

    async find(id: number): Promise<ShiftStatus> {
        const result = await this.connection.execute(
            "select * from Shift_Statuses where id = ?",
            id
        );
        return result[0];
    }

    async findAll(): Promise<ShiftStatus[]> {
        const query = await this.connection.execute("select * from Shift_Statuses");
        const results = query.map((result: any) => {
            return this.convertModel(result);
        })
        return results;
    }

    async persist(shiftStatus: ShiftStatus): Promise<ShiftStatus> {
        const result = await this.connection.execute(
            "insert into Shift_Statuses (status) values(?)",
            shiftStatus.status
        )
        shiftStatus.id = result.id;
        return result;
    }

    async update(shiftStatus: ShiftStatus): Promise<any> {
        const result = await this.connection.execute(
            'update Shift_Statuses set status = ? where id = ?',
            [shiftStatus.status, shiftStatus.id]
        )
        return result;
    }

    async delete(shiftStatus: ShiftStatus): Promise<any> {
        const result = await this.connection.execute(
            "delete from Shift_Statuses where id = ?",
            shiftStatus.id
        )
        return result;
    }
}