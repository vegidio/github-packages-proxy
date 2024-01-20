import serverless from 'serverless-http';
import { app } from './common';

export const handler = serverless(app);
