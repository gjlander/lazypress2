import { Schema, model } from 'mongoose';

import cardSchema from '../schemas/cardSchema.ts';
import editorSchema from '../schemas/editorSchema.ts';
import footerSchema from '../schemas/footerSchema.ts';
import heroSchema from '../schemas/heroSchema.ts';
import navBarSchema from '../schemas/navBarSchema.ts';

const blogSchema = new Schema(
    {
        pages: {
            home: {
                navBar: [navBarSchema],
                hero: [heroSchema],
                cards: [cardSchema],
                footer: [footerSchema],
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
        editors: [editorSchema],
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
