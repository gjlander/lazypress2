import { Schema, model } from 'mongoose';

const userSchema = new Schema(
    {
        clerkId: {
            type: String,
            unique: true,
            required: [true, 'Clerk user ID is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
        },
        username: {
            type: String,
            unique: true,
        },
        firstName: String,
        lastName: String,
    },
    { timestamps: true }
);

export default model('User', userSchema);
