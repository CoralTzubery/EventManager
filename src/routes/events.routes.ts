import { IncomingMessage, ServerResponse } from "http";
import { events, findEventById } from '../data/events.data';

export const hadelEventRoute = (req: IncomingMessage, res: ServerResponse) => {
    if (req.method === 'GET' && req.url === '/events') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(events));
    } 
    else if (req.method === 'GET' && req.url?.startsWith('/events/')) {
        const id = parseInt(req.url.split('/')[2]);
        const event = findEventById(id);

        if (event) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(event));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json '});
            res.end(JSON.stringify(event));
        }
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Event was not found'}));
    }
};