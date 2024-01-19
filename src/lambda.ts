import express from 'express';
import serverless from 'serverless-http';

export const app = express();

app.get('*', (req, res) => {
    res.send(req.path);
});

export const handler = serverless(app);
