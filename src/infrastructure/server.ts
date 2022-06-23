import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './users/userRouter';
import shiftTermRouter from './shift_terms/shiftTermRouter';
import shiftStatusRouter from './shift_statuses/shiftStatusRouter';
import shiftRouter from './shifts/shiftRouter';

const app = express();
const port = 3001;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', userRouter, shiftTermRouter, shiftStatusRouter, shiftRouter);

app.listen(port, () => {
    console.log(`listening port is ${port}`);
})

export default app