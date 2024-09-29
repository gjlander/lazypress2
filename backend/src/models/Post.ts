import { Schema, model } from 'mongoose';
import editorSchema from '../schemas/editorSchema.ts';

const postSchema = new Schema(
    {
        type: String,
        content: [Schema.Types.Mixed],
        editors: { type: [editorSchema], required: true },
        blog: { type: Schema.Types.ObjectId, ref: 'Blog', required: true },
    },
    { timestamps: true }
);

export default model('Post', postSchema);
