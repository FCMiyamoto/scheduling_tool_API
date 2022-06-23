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
const ShiftTermController_1 = require("../../interface/controller/ShiftTermController");
const MysqlConnection_1 = require("../MysqlConnection");
const mysqlConnection = new MysqlConnection_1.MysqlConnection();
const shiftTermController = new ShiftTermController_1.ShiftTermController(mysqlConnection);
const shiftTermRouter = express_1.default.Router();
shiftTermRouter.get('/shift_terms', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield shiftTermController.findShiftTermAll(req, res);
    res.send(results);
}));
shiftTermRouter.get('/shift_terms/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shiftTermController.findShiftTerm(req, res);
    res.send(result);
}));
shiftTermRouter.post('/shift_terms', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shiftTermController.createShiftTerm(req, res);
    res.send(result);
}));
shiftTermRouter.patch('/shift_terms/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shiftTermController.updateShiftTerm(req, res);
    res.send(result);
}));
shiftTermRouter.delete('/shift_terms/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shiftTermController.deleteShiftTerm(req, res);
    res.send(result);
}));
exports.default = shiftTermRouter;
