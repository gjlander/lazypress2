import mongoose from 'mongoose';
import chalkLog from '../utils/chalkLog.ts';

try {
    if (!process.env.MONGO_URI)
        throw new Error('Missing MONGO_URI in environment');

    const client = await mongoose.connect(process.env.MONGO_URI);

    chalkLog('cyan', `Connected to MongoDB @ ${client.connection.name}`);

    client.connection.on('disconnect', () => {
        throw new Error(
            `Lost connection to MongoDB @ ${client.connection.name}`
        );
    });
} catch (error) {
    chalkLog('red', error);
    process.exit(1);
}
