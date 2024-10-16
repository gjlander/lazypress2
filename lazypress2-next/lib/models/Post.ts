import { Schema, model, models } from 'mongoose';
const editorSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    role: {
        type: String,
        enum: ['owner', 'admin', 'collaborator', 'viewer'],
        required: true,
    },
});

const postSchema = new Schema(
    {
        type: String,
        content: [Schema.Types.Mixed],
        editors: { type: [editorSchema], required: true },
        blog: { type: Schema.Types.ObjectId, ref: 'Blog', required: true },
    },
    { timestamps: true }
);

export default models.Post || model('Post', postSchema);
