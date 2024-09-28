import { Request, Response } from 'express-serve-static-core';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { CreateUserQueryParams } from '../types/query-params';
import { User } from '../types/response';

const getUsers = (req: Request, res: Response) => {
    res.json([{ message: 'Got users' }]);
};

const createUser = (
    req: Request<{}, {}, CreateUserDto, CreateUserQueryParams>,
    res: Response
) => {
    const { email, password, username } = req.body;
    res.json({ message: 'Made user' });
};
const getUserById = (req: Request, res: Response<User>) => {
    const { id } = req.params;

    res.status(201).json({
        id: +id,
        username: 'spider-man',
        email: 'peter@parker.com',
    });
};

export { getUsers, getUserById, createUser };
