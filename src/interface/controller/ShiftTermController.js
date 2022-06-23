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
exports.ShiftTermController = void 0;
const ShiftTermRepository_1 = require("../database/ShiftTermRepository");
const ShiftTermSerializer_1 = require("../serializer/ShiftTermSerializer");
const ListShiftTerms_1 = require("../../usecase/shift_terms/ListShiftTerms");
const GetShiftTerm_1 = require("../../usecase/shift_terms/GetShiftTerm");
const CreateShiftTerm_1 = require("../../usecase/shift_terms/CreateShiftTerm");
const UpdateShiftTerm_1 = require("../../usecase/shift_terms/UpdateShiftTerm");
const DeleteShiftTerm_1 = require("../../usecase/shift_terms/DeleteShiftTerm");
class ShiftTermController {
    constructor(dbConnection) {
        this.shiftTermSerializer = new ShiftTermSerializer_1.ShiftTermSerializer();
        this.shiftTermRepository = new ShiftTermRepository_1.ShiftTermRepository(dbConnection);
    }
    findShiftTerm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const useCase = new GetShiftTerm_1.GetShiftTerm(this.shiftTermRepository);
            const result = yield useCase.execute(id);
            return this.shiftTermSerializer.serialize(result);
        });
    }
    findShiftTermAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const useCase = new ListShiftTerms_1.ListShiftTerms(this.shiftTermRepository);
            const results = yield useCase.execute();
            return this.shiftTermSerializer.serialize(results);
        });
    }
    createShiftTerm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { term_start, term_end } = req.body;
            const useCase = new CreateShiftTerm_1.CreateShiftTerm(this.shiftTermRepository);
            const result = yield useCase.execute(term_start, term_end);
            return this.shiftTermSerializer.serialize(result);
        });
    }
    updateShiftTerm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const { term_start, term_end } = req.body;
            const useCase = new UpdateShiftTerm_1.UpdateShiftTerm(this.shiftTermRepository);
            const result = yield useCase.execute(id, term_start, term_end);
            return this.shiftTermSerializer.serialize(result);
        });
    }
    deleteShiftTerm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const useCase = new DeleteShiftTerm_1.DeleteShiftTerm(this.shiftTermRepository);
            const result = yield useCase.execute(id);
            return this.shiftTermSerializer.serialize(result);
        });
    }
}
exports.ShiftTermController = ShiftTermController;
