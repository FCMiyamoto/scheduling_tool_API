"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUsers = void 0;
class ListUsers {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute() {
        return this.userRepository.findAll();
    }
}
exports.ListUsers = ListUsers;
