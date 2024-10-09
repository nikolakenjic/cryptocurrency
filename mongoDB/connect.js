import mongoose from 'mongoose';

export const connectDB = async (url) => {
  console.log('Connecting to DB...');
  try {
    const connect = await mongoose.connect(url);
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};
