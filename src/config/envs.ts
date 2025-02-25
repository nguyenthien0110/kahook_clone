import dotenv from "dotenv";

dotenv.config();

export const CONFIG = {
  URI: process.env.URI || "",
  DB_USER: process.env.USER_DB || "",
  DB_PASSWORD: process.env.PASS_DB || "",
  DB_NAME: process.env.DB_NAME || "",
  NODE_ENV: process.env.NODE_ENV || "dev",
  API_BASE_URL: process.env.API_BASE_URL || "",
};
