import { ShiftStatus } from "../../domain/ShiftStatus";

export abstract class IShiftStatusRepository {
    abstract findAll(): Promise<Array<ShiftStatus>>
    abstract find(id: number): Promise<ShiftStatus>
    abstract persist(shiftTerm: ShiftStatus): Promise<ShiftStatus>
    abstract update(shiftTerm: ShiftStatus): Promise<ShiftStatus>
    abstract delete(id: number): Promise<ShiftStatus>
}