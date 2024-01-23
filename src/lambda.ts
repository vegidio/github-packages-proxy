import { Request, Response, NextFunction } from 'express';
import serverless from 'serverless-http';
import { app, initRoutes } from './common';

// Convert the response to base64 because we are downloading a binary
app.use((req: Request, res: Response, next: NextFunction) => {
    const originalSend = res.send;
    res.send = function (body) {
        body = Buffer.from(body).toString('base64');
        return originalSend.call(this, body);
    };

    next();
});

// Routes must be initialized after the middlewares in Express
initRoutes();

// Must use the parameter `binary: true` to mark the lambda response as base64
export const handler = serverless(app, {
    binary: true,
});
