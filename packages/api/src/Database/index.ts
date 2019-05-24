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

// tslint:disable
Database.getConnection((error, connection) => {
  if (error) {
    switch (error.code) {
      case "PROTOCOL_CONNECTION_LOST":
        console.error("Database connection was closed.");
        break;
      case "ER_CON_COUNT_ERROR":
        console.error("Database has too many connections.");
        break;
      case "ECONNREFUSED":
        console.error("Database connection was refused.");
        break;
      default:
        console.error(`Database error: ${error}`);
    }
  }

  if (connection) {
    connection.release();
  }
});

// We want to use Database.query as an async function
// @ts-ignore
Database.query = util.promisify(Database.query);
