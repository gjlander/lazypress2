const getUsers = (req, res) => {
    res.json([{ message: 'Got users' }]);
};
const createUser = (req, res) => {
    const { email, password, username } = req.body;
    res.json({ message: 'Made user' });
};
const getUserById = (req, res) => {
    const { id } = req.params;
    res.status(201).json({
        id: +id,
        username: 'spider-man',
        email: 'peter@parker.com',
    });
};
export { getUsers, getUserById, createUser };
