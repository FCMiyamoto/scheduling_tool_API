import { Shift } from '../../domain/Shift';
import { IShiftRepository } from '../../usecase/repository/IShiftRepository';
import { IDBConnection } from './IDBConnection';

export class ShiftRepository extends IShiftRepository {
    private connection: any;

    constructor(connection: IDBConnection) {
        super();
        this.connection = connection;
    }

    private convertModel(r: any) {
        const shift = new Shift();
        shift.id = r.id;
        shift.user_id = r.user_id;
        shift.term_id = r.term_id;
        shift.status_id = r.status_id;
        shift.day = r.day;
        return shift;
    }

    async find(id: number): Promise<Shift> {
        const result = await this.connection.execute(
            "select * from Shifts where id = ?",
            id
        );
        return result;
    }

    async findAll(): Promise<Shift[]> {
        const query = await this.connection.execute("select * from Shifts");
        const results = query.map((result: any) => {
            return this.convertModel(result);
        })
        return results;
    }

    async findAllByTerm(term_id: number): Promise<Shift[]> {
        const query = await this.connection.execute(
            "select * from Shifts where term_id = ?",
            term_id
        );
        const results = query.map((result: any) => {
            return this.convertModel(result);
        })
        return results;
    }

    async findAllByTermAndUser(term_id: number, user_id: number): Promise<Shift[]> {
        const query = await this.connection.execute(
            "select * from Shifts where term_id = ? && user_id = ?",
            [term_id, user_id]
        )
        const results = query.map((result: any) => {
            return this.convertModel(result);
        })
        return results;
    }

    async persist(shift: Shift): Promise<Shift> {
        const result = await this.connection.execute(
            "insert into Shifts (user_id,term_id, status_id, day) values(?,?,?,?)",
            [shift.user_id, shift.term_id, shift.status_id, shift.day]
        )
        shift.id = result.id;
        return result;
    }

    async update(shift: Shift): Promise<Shift> {
        const result = await this.connection.execute(
            "update Shifts set term_id = ?, status_id = ?, day = ? where id = ?",
            [shift.term_id, shift.status_id, shift.day, shift.id]
        );
        return result;
    }

    async delete(id: number): Promise<Shift> {
        const result = await this.connection.execute(
            "delete from Shifts where id = ?",
            id
        )
        return this.convertModel(result);
    }
}