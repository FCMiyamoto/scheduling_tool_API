import { User } from "../../domain/User";
import { IUserRepository } from "../../usecase/repository/IUserRepository";
import { IDBConnection } from "./IDBConnection";

export class UserRepository extends IUserRepository {
    private connection: any;

    constructor(connection: IDBConnection) {
        super();
        this.connection = connection;
    }

    private convertModel(r: any) {
        const user = new User();
        user.id = r.id;
        user.username = r.username;
        user.password = r.password;
        return user;
    }

    async find(id: number): Promise<User> {
        const result = await this.connection.execute(
            "select * from Users where id = ?",
            id
        )
        return result;
    }

    async findAll(): Promise<User[]> {
        const query = await this.connection.execute("select * from Users");
        const results = query.map((result: any) => {
            return this.convertModel(result);
        })
        return results;
    }

    async persist(user: User): Promise<User> {
        const result = await this.connection.execute(
            "insert into Users(username, password) values(?,?)",
            [user.username, user.password]
        )
        user.id = result.insertId;
        return result;
    }

    async update(user: User): Promise<User> {
        const result = await this.connection.execute(
            'update Users set username=?,password=? where id = ?',
            [user.username, user.password, user.id]
        )
        return result;
    }

    async delete(id: number): Promise<User> {
        const result = await this.connection.execute(
            'delete from Users where id = ?',
            id
        )
        return this.convertModel(result);
    }
}