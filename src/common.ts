import express from 'express';
import axios from 'axios';

export const app = express();

app.get('*', async (req, res) => {
    const user = process.env.GITHUB_USER;
    const token = process.env.GITHUB_TOKEN;

    if (!user || !token) {
        res.end('Environment variables $GITHUB_USER or $GITHUB_TOKEN missing');
        return;
    }

    const response = await fetchPackage(user, token, req.path);

    res.contentType('application/xml');
    res.send(response);
});

const fetchPackage = async (user: string, token: string, path: string): Promise<string> => {
    const url = `https://maven.pkg.github.com/${user}/*${path}`;
    const response = await axios.get<string>(url, {
        headers: {
            Authorization: `token ${token}`,
        },
    });

    return response.data;
};
