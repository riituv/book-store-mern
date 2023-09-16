import dotenv from 'dotenv';
dotenv.config();

export const PORT=5555;

export const mongoUrl=process.env.MONGODB_URL;

//MONGODB_URL stored in .env file
