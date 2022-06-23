import { User } from "../../domain/User";
import { IUserRepository } from "../repository/IUserRepository";

export class ListUsers {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    execute() {
        return this.userRepository.findAll();
    }
}