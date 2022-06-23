"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const User_1 = require("../../domain/User");
class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute(username, password) {
        const user = new User_1.User(username, password);
        return this.userRepository.persist(user);
    }
}
exports.CreateUser = CreateUser;
