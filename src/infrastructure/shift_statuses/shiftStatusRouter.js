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
const ShiftStatusController_1 = require("../../interface/controller/ShiftStatusController");
const MysqlConnection_1 = require("../MysqlConnection");
const mysqlConnection = new MysqlConnection_1.MysqlConnection();
const shiftStatusController = new ShiftStatusController_1.ShiftStatusController(mysqlConnection);
const shiftStatusRouter = express_1.default.Router();
shiftStatusRouter.get('/shift_statuses', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield shiftStatusController.findShiftStatusAll(req, res);
    res.send(results);
}));
shiftStatusRouter.get('/shift_statuses/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shiftStatusController.findShiftStatus(req, res);
    res.send(result);
}));
shiftStatusRouter.post('/shift_statuses', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shiftStatusController.createShiftStatus(req, res);
    res.send(result);
}));
shiftStatusRouter.patch('/shift_statuses/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shiftStatusController.updateShiftStatus(req, res);
    res.send(result);
}));
shiftStatusRouter.delete('/shift_statuses/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shiftStatusController.deleteShiftStatus(req, res);
    res.send(result);
}));
exports.default = shiftStatusRouter;
