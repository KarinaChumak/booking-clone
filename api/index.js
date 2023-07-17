import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import hotelRouter from './routes/hotelRoutes.js';
import roomRouter from './routes/roomRoutes.js';
import authRouter from './routes/authRoutes.js';

const app = express();

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_STRING);
  } catch (err) {
    throw new Error(err.message);
  }
};

mongoose.connection.on('connected', () => {
  console.log('MongoDb connected');
});
mongoose.connection.on('disconnected', () => {
  console.log('MongoDb disconnected');
});

// Middlewares
app.use(express.json());
app.use('/api/hotels', hotelRouter);
app.use('/api/rooms', roomRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
  return res.status(500).json(err.message);
});

app.listen(8800, () => {
  console.log('Connected to server');
  connect();
});
