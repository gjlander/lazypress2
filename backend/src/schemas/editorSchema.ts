import { Schema } from 'mongoose';

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

export default editorSchema;
