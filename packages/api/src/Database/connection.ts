import * as dotenv from "dotenv";
import * as mysql from "mysql";
import * as util from "util";

dotenv.config();

export const Database = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});

Database.getConnection((error, connection) => {
  if (error) {
    switch (error.code) {
      case "PROTOCOL_CONNECTION_LOST":
        throw new Error("Database connection was closed");
      case "ER_CON_COUNT_ERROR":
        throw new Error("Database has too many connections");
      case "ECONNREFUSED":
        throw new Error("Database connection was refused");
      default:
        throw new Error("Unknown database error");
    }
  }

  if (connection) {
    connection.release();
  }
});

// We want to use Database.query as an async function
// @ts-ignore
Database.query = util.promisify(Database.query) as unknown;
