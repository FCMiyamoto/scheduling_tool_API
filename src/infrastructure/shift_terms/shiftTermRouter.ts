import express from 'express';
import { ShiftTermController } from '../../interface/controller/ShiftTermController';
import { MysqlConnection } from '../MysqlConnection';

const mysqlConnection = new MysqlConnection();
const shiftTermController = new ShiftTermController(mysqlConnection);
const shiftTermRouter = express.Router();

shiftTermRouter.get('/shift_terms', async (req: express.Request, res: express.Response) => {
    const results = await shiftTermController.findShiftTermAll(req, res);
    res.send(results);
})

shiftTermRouter.get('/shift_terms/:id', async (req: express.Request, res: express.Response) => {
    const result = await shiftTermController.findShiftTerm(req, res);
    res.send(result);
})

shiftTermRouter.post('/shift_terms', async (req: express.Request, res: express.Response) => {
    const result = await shiftTermController.createShiftTerm(req, res);
    res.send(result);
})

shiftTermRouter.patch('/shift_terms/:id', async (req: express.Request, res: express.Response) => {
    const result = await shiftTermController.updateShiftTerm(req, res);
    res.send(result);
})

shiftTermRouter.delete('/shift_terms/:id', async (req: express.Request, res: express.Response) => {
    const result = await shiftTermController.deleteShiftTerm(req, res);
    res.send(result);
})

export default shiftTermRouter