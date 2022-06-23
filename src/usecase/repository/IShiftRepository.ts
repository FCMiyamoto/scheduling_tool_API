import { Shift } from "../../domain/Shift";

export abstract class IShiftRepository {
    abstract findAll(): Promise<Array<Shift>>
    abstract find(id: number): Promise<Shift>
    abstract findAllByTermAndUser(term_id: number, user_id: number): Promise<Array<Shift>> //user_idを指定して全表示
    abstract findAllByTerm(id: number): Promise<Array<Shift>> //term_idを指定して全表示
    abstract persist(shift: Shift): Promise<Shift>
    abstract update(shift: Shift): Promise<any>
    abstract delete(shift: Shift): Promise<any>
}