import { Schema, model } from 'mongoose';

import cardSchema from '../schemas/cardSchema.ts';
import editorSchema from '../schemas/editorSchema.ts';
import linkSchema from '../schemas/linkSchema.ts';

const blogSchema = new Schema(
    {
        content: {
            ui: {
                navbar: [linkSchema],
                footer: [linkSchema],
            },
            home: {
                heroSlides: [cardSchema],
                cards: [cardSchema],
            },
        },
        dashboard: {
            blogTitle: {
                type: String,
                default: 'Untitled Page',
            },
            deployed: {
                type: Boolean,
                default: false,
            },
            siteUrl: String,
            previewUrl: String,
        },
        users: { type: [editorSchema], required: true },
        // clerkUserId: {
        //     type: String,
        //     required: true,
        // },
        // posts: [Schema.Types.ObjectId],
        isPreview: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default model('Blog', blogSchema);
