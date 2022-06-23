"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const userRouter_1 = __importDefault(require("./users/userRouter"));
const shiftTermRouter_1 = __importDefault(require("./shift_terms/shiftTermRouter"));
const shiftStatusRouter_1 = __importDefault(require("./shift_statuses/shiftStatusRouter"));
const shiftRouter_1 = __importDefault(require("./shifts/shiftRouter"));
const app = (0, express_1.default)();
const port = 3001;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use('/api', userRouter_1.default, shiftTermRouter_1.default, shiftStatusRouter_1.default, shiftRouter_1.default);
app.listen(port, () => {
    console.log(`listening port is ${port}`);
});
exports.default = app;
