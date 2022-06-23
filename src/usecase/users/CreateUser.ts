import { User } from "../../domain/User";
import { IUserRepository } from "../repository/IUserRepository";

export class CreateUser {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    execute(username: string, password: string) {
        const user = new User(username, password);
        return this.userRepository.persist(user);
    }
}