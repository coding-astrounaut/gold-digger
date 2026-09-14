import http from 'node:http';
import { serveStatic } from './utils/serveStatic.js'
import { handlePriceRequest, handleBuyRequest } from './utils/routeHandlers.js'

const PORT = 8000;

const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {

    if (req.url === '/api') {

        if (req.method === 'GET') {
            return await handlePriceRequest(res);
        }

        else if (req.method === 'POST') {
            return await handleBuyRequest(req, res);    
        }

    }
   serveStatic(req, res, __dirname);
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});