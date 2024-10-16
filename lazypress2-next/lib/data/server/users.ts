import dbConnect from '@/database';
import { User } from '@/lib/models';
// import { ErrorMessages } from '@/lib/utils';

export const getUsers = async () => {
    try {
        const users = await User.find();

        if (!users.length) {
            throw new Error('No users in database');
        }

        return { users: JSON.parse(JSON.stringify(users)) };
    } catch (error) {
        return { users: null, error };
    }
};
/**
 * Retrieves a user by their ID.
 *
 * @param id - The ID of the user.
 * @returns A Promise that resolves to an object containing the user information or an error if the user is not found.
 */
export const getUserById = async (id: string) => {
    try {
        await dbConnect();
        const user = await User.findById(id);
        if (!user) throw Error('User not found');
        return { user: JSON.parse(JSON.stringify(user)) };
    } catch (error) {
        return { user: null, error };
    }
};
