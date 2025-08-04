import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => {
      console.log('Server connected to Database')
    });

    mongoose.connection.on('error', (err) => {
      console.log('Error in connecting database', err)
    })
    await mongoose.connect(config.DATABE_URL as string);


  } catch (error) {
    console.log("Database connection error", error);
    process.exit(1)
  }
};

export default connectDB;
