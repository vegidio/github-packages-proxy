import { NextFunction, Request, Response } from 'express';
import serverless from 'serverless-http';
import { app, initRoutes } from './common';

app.use((_: Request, res: Response, next: NextFunction) => {
    res.setHeader('Content-Type', 'application/xml');
    next();
});

initRoutes();

export const handler = serverless(app);
