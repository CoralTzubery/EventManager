import * as http from 'http';
import { handleEventRoute } from './routes/events.routes';

const server = http.createServer((req, res) => {
    if (req.url?.startsWith('/events')) {
        handleEventRoute(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify( { message: 'Route not found' }));
    }
});

const PORT = 3000;
server.listen(PORT, ()=> {
    console.log(`Server running on httpe://localhost:${PORT}`);
});