import { Schema, model } from 'mongoose';

const postSchema = new Schema(
    {
        type: String,
        content: [Schema.Types.Mixed],
    },
    { timestamps: true }
);

export default model('Post', postSchema);
