import { IUserRepository } from "../repository/IUserRepository";

export class UpdateUser {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(id: number, username: string, password: string) {
        const user = await this.userRepository.find(id);
        user.id = id;
        user.username = username;
        user.password = password;
        return this.userRepository.update(user);
    }
}