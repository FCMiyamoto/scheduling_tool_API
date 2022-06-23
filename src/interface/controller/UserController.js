"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserRepository_1 = require("../database/UserRepository");
const UserSerializer_1 = require("../serializer/UserSerializer");
const ListUsers_1 = require("../../usecase/users/ListUsers");
const GetUser_1 = require("../../usecase/users/GetUser");
const CreateUser_1 = require("../../usecase/users/CreateUser");
const UpdateUser_1 = require("../../usecase/users/UpdateUser");
const DeleteUser_1 = require("../../usecase/users/DeleteUser");
class UserController {
    constructor(dbConnection) {
        this.userSerializer = new UserSerializer_1.UserSerializer();
        this.userRepository = new UserRepository_1.UserRepository(dbConnection);
    }
    findUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const useCase = new GetUser_1.GetUser(this.userRepository);
            const result = yield useCase.execute(id);
            return this.userSerializer.serialize(result);
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const useCase = new ListUsers_1.ListUsers(this.userRepository);
            const results = yield useCase.execute();
            return this.userSerializer.serialize(results);
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            const useCase = new CreateUser_1.CreateUser(this.userRepository);
            const result = yield useCase.execute(username, password);
            return this.userSerializer.serialize(result);
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const { username, password } = req.body;
            const useCase = new UpdateUser_1.UpdateUser(this.userRepository);
            const result = yield useCase.execute(id, username, password);
            return this.userSerializer.serialize(result);
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const useCase = new DeleteUser_1.DeleteUser(this.userRepository);
            const result = yield useCase.execute(id);
            return this.userSerializer.serialize(result);
        });
    }
}
exports.UserController = UserController;
