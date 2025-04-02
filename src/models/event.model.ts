import mongoose, { Schema, Document } from 'mongoose';

export interface Event {
    id: number;
    name: string;
    date: string;
    location: string;
    description: string;
}

export interface IEvent extends Document {
    name: string;
    date: Date;
    loaction: string;
    description: string;
}

const EventSchema = new Schema<IEvent>({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    loaction: { type: String, required: true },
    description: { type: String, required: true }
});

export const EventModel = mongoose.model<IEvent>('Event', EventSchema);
