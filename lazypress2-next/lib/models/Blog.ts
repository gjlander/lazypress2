import { Schema, model, models } from 'mongoose';

const linkSchema = new Schema({
    link: { type: String, default: 'Change Me' },
    href: String,
});
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
const cardSchema = new Schema({
    imgUrl: {
        type: String,
        default:
            'https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg',
        maxLength: 510,
        // match: [
        //     /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
        //     "must be a valid URL",
        // ],
    },
    title: { type: String, default: 'A delicious recipe here', maxLength: 100 },
    text: { type: String, default: 'Simply delicious', maxLength: 255 },
    button: {
        type: String,
        default: 'To Recipe',
    },
});
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

export default models.Blog || model('Blog', blogSchema);
