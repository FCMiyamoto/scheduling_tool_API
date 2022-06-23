import express from 'express';
import { UserController } from '../../interface/controller/UserController';
import { MysqlConnection } from '../MysqlConnection';

const mysqlConnection = new MysqlConnection();
const userController = new UserController(mysqlConnection);
const userRouter = express.Router();


//user操作
userRouter.get('/users', async (req: express.Request, res: express.Response) => {
    const results = await userController.findAll(req, res);
    res.send(results);
});

userRouter.get('/users/:id', async (req: express.Request, res: express.Response) => {
    const result = await userController.findUser(req, res);
    res.send(result);
})

userRouter.post('/users', async (req: express.Request, res: express.Response) => {
    const result = await userController.createUser(req, res);
    console.log(result);
    res.send(result);
})

userRouter.patch('/users/:id', async (req: express.Request, res: express.Response) => {
    const result = await userController.updateUser(req, res);
    res.send(result);
})

userRouter.delete('/users/:id', async (req: express.Request, res: express.Response) => {
    const result = await userController.deleteUser(req, res);
    res.send(result);
})

export default userRouter