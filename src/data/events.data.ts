import { Event } from '../models/event.model';

export let events: Event[] = [
    { id: 1, name: 'Technology conference', date: '2025-05-15', location: 'Tel-Aviv', description: 'Professional conference on innovation'},
    { id: 2, name: 'Hackathon', date: '2025-06-10', location: 'Haifa', description: 'Technology development event'}
];

export const findEventById = (id:number): Event | undefined => {
    return events.find(event => event.id === id);
};