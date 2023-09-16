import express from "express";
import { PORT, mongoUrl } from './config.js';
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());

//allowing all origins
app.use(cors());

//custom origins
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   }));


app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome to Book Store');
});

app.use('/books', booksRoute);

//connect db
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });