"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUserById = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json([{ message: 'Got users' }]);
};
exports.getUsers = getUsers;
const createUser = (req, res) => {
    const { email, password, username } = req.body;
    res.json({ message: 'Made user' });
};
exports.createUser = createUser;
const getUserById = (req, res) => {
    const { id } = req.params;
    res.status(201).json({
        id: +id,
        username: 'spider-man',
        email: 'peter@parker.com',
    });
};
exports.getUserById = getUserById;
