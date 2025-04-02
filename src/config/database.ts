import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://tzuberycoral:Coral1997!@cluster0.oexxwmn.mongodb.net/'

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1);
    }
}