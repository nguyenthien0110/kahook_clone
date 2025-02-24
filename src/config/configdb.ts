import mongoose from "mongoose";
import { CONFIG } from "./envs";

const MONGODB_URI = CONFIG.URI;

if (!MONGODB_URI)
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );

export const connectToMongodb = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: CONFIG.DB_NAME,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
