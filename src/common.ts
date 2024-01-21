import express from 'express';
import axios, { AxiosResponse } from 'axios';

export const app = express();

app.get('*', async (req, res) => {
    const user = process.env.GITHUB_USER;
    const token = process.env.GITHUB_TOKEN;

    if (!user || !token) {
        res.end('Environment variables $GITHUB_USER or $GITHUB_TOKEN missing');
        return;
    }

    const response = await fetchPackage(user, token, req.path);
    res.set(response.headers);
    res.status(response.status);

    // Download the file as chunks of data, instead of saving the entire file in memory first
    response.data.pipe(res);
});

const fetchPackage = async (user: string, token: string, path: string): Promise<AxiosResponse> => {
    const url = `https://maven.pkg.github.com/${user}/*${path}`;
    return axios.get(url, {
        headers: { Authorization: `token ${token}` },
        responseType: 'stream',
    });
};
