"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = void 0;
class GetUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute(id) {
        return this.userRepository.find(id);
    }
}
exports.GetUser = GetUser;
