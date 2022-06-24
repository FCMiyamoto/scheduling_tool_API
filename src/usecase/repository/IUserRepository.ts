import { User } from "../../domain/User";

export abstract class IUserRepository {
    abstract findAll(): Promise<Array<User>>
    abstract find(id: number): Promise<User>
    abstract persist(user: User): Promise<User>
    abstract update(user: User): Promise<User>
    abstract delete(id: number): Promise<User>
}