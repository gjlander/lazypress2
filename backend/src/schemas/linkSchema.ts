import { Schema } from 'mongoose';

const linkSchema = new Schema({
    link: { type: String, default: 'Change Me' },
    href: String,
});

export default linkSchema;
