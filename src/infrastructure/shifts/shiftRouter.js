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
const express = require("express");
const ShiftController_1 = require("../../interface/controller/ShiftController");
const MysqlConnection_1 = require("../MysqlConnection");
const mysqlConnection = new MysqlConnection_1.MysqlConnection();
const shiftController = new ShiftController_1.ShiftController(mysqlConnection);
const shiftRouter = express.Router();
shiftRouter.get('/shifts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield shiftController.findAll(req, res);
    res.send(results);
}));
shiftRouter.get('/shift/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shiftController.findShift(req, res);
    res.send(result);
}));
shiftRouter.get('/shifts/:term_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield shiftController.findShiftByTerm(req, res);
    res.send(results);
}));
shiftRouter.get('/shifts/:term_id/:user_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield shiftController.findShiftByTermAndUser(req, res);
    res.send(results);
}));
shiftRouter.post('/shifts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shiftController.createShift(req, res);
    res.send(result);
}));
shiftRouter.patch('/shifts/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shiftController.updateShift(req, res);
    res.send(result);
}));
shiftRouter.delete('/shifts/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shiftController.deleteShift(req, res);
    res.send(result);
}));
exports.default = shiftRouter;
