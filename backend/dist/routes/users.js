import { Router } from 'express';
import { getUsers, getUserById, createUser } from '../controllers/users';
const userRouter = Router();
userRouter.get('/', getUsers);
userRouter.post('/', createUser);
userRouter.get('/:id', getUserById);
export default userRouter;
