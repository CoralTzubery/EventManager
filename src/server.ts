import * as http from 'http';
import { connectDB } from './config/database';
import { handleEventsRoute } from './routes/events.routes';

connectDB();

const server = http.createServer((req, res) => {
    if (req.url?.startsWith('/events')) {
        handleEventsRoute(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify( { message: 'Route not found' }));
    }
});

const PORT = 3000;
server.listen(PORT, ()=> {
    console.log(`Server running on httpe://localhost:${PORT}`);
});