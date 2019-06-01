import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  database: {
    type: "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
  }
};