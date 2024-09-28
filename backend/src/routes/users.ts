import express, { Router } from 'express';
import { getUsers, getUserById, createUser } from '../controllers/users.ts';

const userRouter = Router();

userRouter.use(express.json());

userRouter.get('/', getUsers);
userRouter.post('/', createUser);

userRouter.get('/:id', getUserById);

export default userRouter;
