import { Request, Response } from 'express-serve-static-core';
import { isValidObjectId } from 'mongoose';

import ErrorResponse from '../utils/ErrorResponse.js';
import asyncHandler from '../utils/asyncHandler.ts';
import User from '../models/User.ts';

const getUsers = asyncHandler(async (req: Request, res: Response) => {
    const users = await User.find();

    if (!users.length) {
        throw new ErrorResponse('No users in database', 200);
    }
    res.json(users);
});

const getUserById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) throw new ErrorResponse('Invalid id', 400);

    const user = await User.findById(id);

    if (!user)
        throw new ErrorResponse(`User with id of ${id} doesn't exist`, 404);

    res.json(user);
});

export { getUsers, getUserById };

//tutorial
// import { CreateUserDto } from '../dtos/CreateUser.dto';
// import { CreateUserQueryParams } from '../types/query-params';
// import { User } from '../types/response';

// const getUsers = (req: Request, res: Response) => {
//     res.json([{ message: 'Got users' }]);
// };

// const createUser = (
//     req: Request<{}, {}, CreateUserDto, CreateUserQueryParams>,
//     res: Response
// ) => {
//     const { username, email, password } = req.body;

//     res.json({ username, email, password });
// };
// const getUserById = (req: Request, res: Response<User>) => {
//     const { id } = req.params;

//     res.status(201).json({
//         id: +id,
//         username: 'spider-man',
//         email: 'peter@parker.com',
//     });
// };

// export { getUsers, getUserById, createUser };
