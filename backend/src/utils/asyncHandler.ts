import { Request, Response, NextFunction } from 'express-serve-static-core';

const asyncHandler =
    (
        fn: (
            req: Request,
            res: Response,
            next: NextFunction
        ) => Promise<object | object[]>
    ) =>
    (req: Request, res: Response, next: NextFunction) =>
        Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;
