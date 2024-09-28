import express from 'express';
import cors from 'cors';

import './db/index.ts';
import chalkLog from './utils/chalkLog.ts';
import errorHandler from './middlewares/errorHandler.ts';

import userRouter from './routes/users.ts';
import ErrorResponse from './utils/ErrorResponse.ts';

const app = express();

const port = process.env.PORT || 24601;

app.use(cors({ exposedHeaders: 'Authorization' }));

app.use('/api/users', userRouter);

app.use('*', (req, res) => {
    throw new ErrorResponse('Route does not exist', 404);
});
app.use(errorHandler);

app.listen(port, () => {
    chalkLog('yellow', `Listening on port http://localhost:${port}`);
});
