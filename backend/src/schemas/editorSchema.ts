import { Schema } from 'mongoose';

const editorSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        default:
            'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg',
        ref: 'User',
    },
    role: {
        type: String,
        enum: ['owner', 'admin', 'collaborator', 'viewer'],
        required: true,
    },
});

export default editorSchema;
