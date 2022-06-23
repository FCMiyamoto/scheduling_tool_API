import { UserRepository } from "../database/UserRepository";
import { IDBConnection } from "../database/IDBConnection";
import { UserSerializer } from "../serializer/UserSerializer";
import { ListUsers } from "../../usecase/users/ListUsers";
import { GetUser } from "../../usecase/users/GetUser";
import { CreateUser } from "../../usecase/users/CreateUser";
import { UpdateUser } from "../../usecase/users/UpdateUser";
import { DeleteUser } from "../../usecase/users/DeleteUser";

export class UserController {
    private userSerializer: UserSerializer;
    private userRepository: UserRepository;

    constructor(dbConnection: IDBConnection) {
        this.userSerializer = new UserSerializer();
        this.userRepository = new UserRepository(dbConnection);
    }

    async findUser(req: any, res: any) {
        const id = req.params.id;
        const useCase = new GetUser(this.userRepository);
        const result = await useCase.execute(id);
        return this.userSerializer.serialize(result);
    }

    async findAll(req: any, res: any) {
        const useCase = new ListUsers(this.userRepository);
        const results = await useCase.execute();
        return this.userSerializer.serialize(results);
    }

    async createUser(req: any, res: any) {
        const { username, password } = req.body;
        const useCase = new CreateUser(this.userRepository);
        const result = await useCase.execute(username, password);
        return this.userSerializer.serialize(result);
    }

    async updateUser(req: any, res: any) {
        const id = req.params.id;
        const { username, password } = req.body;
        const useCase = new UpdateUser(this.userRepository);
        const result = await useCase.execute(id, username, password);
        return this.userSerializer.serialize(result);
    }

    async deleteUser(req: any, res: any) {
        const id = req.params.id;
        const useCase = new DeleteUser(this.userRepository)
        const result = await useCase.execute(id);
        return this.userSerializer.serialize(result);
    }
}

