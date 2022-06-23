import { User } from "../../domain/User";
import { IUserRepository } from "../repository/IUserRepository";

export class DeleteUser {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(id: number) {
        const user = await this.userRepository.find(id);
        return this.userRepository.delete(user);
    }
}