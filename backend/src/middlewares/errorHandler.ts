import { ErrorRequestHandler } from 'express-serve-static-core';
import chalkLog from '../utils/chalkLog.ts';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    process.env.NODE_ENV !== 'production' && chalkLog('red', err.stack);

    res.status(err.statusCode || 500).json({
        error: err.message || 'Server Error',
    });
};

export default errorHandler;
