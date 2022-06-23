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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../../interface/controller/UserController");
const MysqlConnection_1 = require("../MysqlConnection");
const mysqlConnection = new MysqlConnection_1.MysqlConnection();
const userController = new UserController_1.UserController(mysqlConnection);
const userRouter = express_1.default.Router();
//user操作
userRouter.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield userController.findAll(req, res);
    res.send(results);
}));
userRouter.get('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userController.findUser(req, res);
    res.send(result);
}));
userRouter.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userController.createUser(req, res);
    console.log(result);
    res.send(result);
}));
userRouter.patch('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userController.updateUser(req, res);
    res.send(result);
}));
userRouter.delete('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userController.deleteUser(req, res);
    res.send(result);
}));
exports.default = userRouter;
