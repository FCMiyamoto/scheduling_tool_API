import express from "express";
import { ShiftStatusController } from "../../interface/controller/ShiftStatusController";
import { MysqlConnection } from "../MysqlConnection";
import shiftTermRouter from "../shift_terms/shiftTermRouter";

const mysqlConnection = new MysqlConnection();
const shiftStatusController = new ShiftStatusController(mysqlConnection);
const shiftStatusRouter = express.Router();

shiftStatusRouter.get('/shift_statuses', async (req: express.Request, res: express.Response) => {
    const results = await shiftStatusController.findShiftStatusAll(req, res);
    res.send(results);
})

shiftStatusRouter.get('/shift_statuses/:id', async (req: express.Request, res: express.Response) => {
    const result = await shiftStatusController.findShiftStatus(req, res);
    res.send(result);
})

shiftStatusRouter.post('/shift_statuses', async (req: express.Request, res: express.Response) => {
    const result = await shiftStatusController.createShiftStatus(req, res);
    res.send(result);
})

shiftStatusRouter.patch('/shift_statuses/:id', async (req: express.Request, res: express.Response) => {
    const result = await shiftStatusController.updateShiftStatus(req, res);
    res.send(result);
})

shiftStatusRouter.delete('/shift_statuses/:id', async (req: express.Request, res: express.Response) => {
    const result = await shiftStatusController.deleteShiftStatus(req, res);
    res.send(result);
})

export default shiftStatusRouter;