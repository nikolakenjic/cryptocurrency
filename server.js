import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';
import { StatusCodes } from 'http-status-codes';
import { connectDB } from './mongoDB/connect.js';

const app = express();

app.use(express.json());
app.use(cookieParser());

import authRouter from './routes/authRoutes.js';
import cryptoRouter from './routes/cryptoRoutes.js';
import userRouter from './routes/userRoutes.js';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authenticateUser.js';

// Test routes
app.get('/api/v1/test', (req, res, next) => {
  res.json({ msg: 'testing route' });
});

// AuthRouter
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/currency', cryptoRouter);
app.use('/api/v1/users', authenticateUser, userRouter);

// Errors
app.use('*', (req, res, next) => {
  res.status(StatusCodes.NOT_FOUND).json({ msg: 'Not Found Route or Page' });
});

app.use(errorHandlerMiddleware);

// Connected and running on server
const port = process.env.PORT;
try {
  await connectDB(process.env.MONGODB_URL);
  app.listen(port, () => {
    console.log(`Server is running on a port ${port}...`);
  });
} catch (err) {
  console.log(err);
  process.exit(1);
}
