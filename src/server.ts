import { NextFunction, Request, Response } from 'express';
import { app, initRoutes } from './common';

app.use((_: Request, res: Response, next: NextFunction) => {
    res.setHeader('Content-Type', 'application/xml');
    next();
});

initRoutes();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
