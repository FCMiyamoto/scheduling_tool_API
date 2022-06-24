import { ShiftTerm } from "../../domain/ShiftTerm";
import { IShiftTermRepository } from "../../usecase/repository/IShiftTermRepository";
import { IDBConnection } from "./IDBConnection";

export class ShiftTermRepository extends IShiftTermRepository {
    private connection: any;

    constructor(connection: IDBConnection) {
        super();
        this.connection = connection;
    }

    private convertModel(r: any) {
        const shiftTerm = new ShiftTerm();
        shiftTerm.id = r.id;
        shiftTerm.term_start = r.term_start;
        shiftTerm.term_end = r.term_end;
        return shiftTerm;
    }

    async find(id: number): Promise<ShiftTerm> {
        const result = await this.connection.execute(
            'select * from Shift_Terms where id = ? limit 1',
            id
        )
        return result;
    }

    async findAll(): Promise<ShiftTerm[]> {
        const query = await this.connection.execute('select * from Shift_Terms');
        const results = query.map((result: any) => {
            return this.convertModel(result);
        })
        return results;
    }

    async persist(shiftTerm: ShiftTerm): Promise<ShiftTerm> {
        const result = this.connection.execute(
            "insert into Shift_Terms (term_start, term_end) values(?,?)",
            [shiftTerm.term_start, shiftTerm.term_end]
        )
        shiftTerm.id = result.id;
        return result;
    }

    async update(shiftTerm: ShiftTerm): Promise<ShiftTerm> {
        const result = this.connection.execute(
            "update Shift_Terms set term_start = ? , term_end = ? where id = ?",
            [shiftTerm.term_start, shiftTerm.term_end, shiftTerm.id]
        )
        return result;
    }

    async delete(id: number): Promise<ShiftTerm> {
        const result = this.connection.execute(
            "delete from Shift_Terms where id = ?",
            id
        )
        return this.convertModel(result);
    }
}