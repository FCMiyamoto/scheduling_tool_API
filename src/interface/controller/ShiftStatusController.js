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
exports.ShiftStatusController = void 0;
const ShiftStatusRepository_1 = require("../database/ShiftStatusRepository");
const ShiftStatusSerializer_1 = require("../serializer/ShiftStatusSerializer");
const ListShiftStatuses_1 = require("../../usecase/shift_statuses/ListShiftStatuses");
const GetShiftStatus_1 = require("../../usecase/shift_statuses/GetShiftStatus");
const CreateShiftStatus_1 = require("../../usecase/shift_statuses/CreateShiftStatus");
const UpdateShiftStatus_1 = require("../../usecase/shift_statuses/UpdateShiftStatus");
const DeleteShiftStatus_1 = require("../../usecase/shift_statuses/DeleteShiftStatus");
class ShiftStatusController {
    constructor(dbConnection) {
        this.shiftStatusSerializer = new ShiftStatusSerializer_1.ShiftStatusSerializer();
        this.shiftStatusRepository = new ShiftStatusRepository_1.ShiftStatusRepository(dbConnection);
    }
    findShiftStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const useCase = new GetShiftStatus_1.GetShiftStatus(this.shiftStatusRepository);
            const result = yield useCase.execute(id);
            return this.shiftStatusSerializer.serialize(result);
        });
    }
    findShiftStatusAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const useCase = new ListShiftStatuses_1.ListShiftStatuses(this.shiftStatusRepository);
            const results = yield useCase.execute();
            return this.shiftStatusSerializer.serialize(results);
        });
    }
    createShiftStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { status } = req.body;
            const useCase = new CreateShiftStatus_1.CreateShiftStatus(this.shiftStatusRepository);
            const result = useCase.execute(status);
            return this.shiftStatusSerializer.serialize(result);
        });
    }
    updateShiftStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const { status } = req.body;
            const useCase = new UpdateShiftStatus_1.UpdateShiftStatus(this.shiftStatusRepository);
            const result = yield useCase.execute(id, status);
            return this.shiftStatusSerializer.serialize(result);
        });
    }
    deleteShiftStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const useCase = new DeleteShiftStatus_1.DeleteShiftStatus(this.shiftStatusRepository);
            const result = useCase.execute(id);
            return this.shiftStatusSerializer.serialize(result);
        });
    }
}
exports.ShiftStatusController = ShiftStatusController;
