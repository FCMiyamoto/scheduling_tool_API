import { User } from "../../domain/User";
import { IUserRepository } from "../repository/IUserRepository";

export class GetUser {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    execute(id: number) {
        return this.userRepository.find(id);
    }
}