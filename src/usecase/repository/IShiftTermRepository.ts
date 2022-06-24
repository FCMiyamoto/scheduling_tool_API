import { ShiftTerm } from "../../domain/ShiftTerm";

export abstract class IShiftTermRepository {
    abstract findAll(): Promise<Array<ShiftTerm>>
    abstract find(id: number): Promise<ShiftTerm>
    abstract persist(shiftTerm: ShiftTerm): Promise<ShiftTerm>
    abstract update(shiftTerm: ShiftTerm): Promise<ShiftTerm>
    abstract delete(id: number): Promise<ShiftTerm>
}