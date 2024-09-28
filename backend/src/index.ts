import express, { Request, Response } from 'express';
import cors from 'cors';
// import userRouter from './routes/users';

const app = express();

const port = process.env.PORT || 24601;

app.use(cors({ exposedHeaders: 'Authorization' }));

// app.use('/api/users', userRouter);

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});
