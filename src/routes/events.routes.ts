import { IncomingMessage, ServerResponse } from "http";
import { events, findEventById } from '../data/events.data';
import { Event } from '../models/event.model';

export const handleEventRoute = (req: IncomingMessage, res: ServerResponse) => {
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
    
    else if (req.method === 'POST' && req.url === '/events') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const newEvent: Event = JSON.parse(body);
                newEvent. id = events.length ? events[events.length - 1].id + 1 : 1;
                events.push(newEvent);
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(newEvent));
            } catch (error) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify( { message: 'Not a right JSON format'}));
            }
        });
    }

    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Event was not found'}));
    }
};