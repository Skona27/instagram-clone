import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import * as cryptoRandomString from "crypto-random-string";
import * as moment from "moment";
import { Database } from "../../Database";
import {
  IUserForCreationDTO,
  IUserForTokenDTO,
  IUserFromDatabaseDTO
} from "../index";
import * as dotenv from "dotenv";

dotenv.config();

export const create = async (user: IUserForCreationDTO) => {
  const { email, firstName, lastName, password } = user;
  const hash = await bcrypt.hash(password, 10);
  const id = cryptoRandomString({ length: 16 });
  const createdAt = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");

  try {
    await Database.query(
      `INSERT INTO users (id, email, hash, firstName, lastName, createdAt) VALUES (?,?,?,?,?,?)`,
      [id, email, hash, firstName, lastName, createdAt]
    );
    return {
      id,
      firstName,
      lastName,
      email,
      hash,
      createdAt
    } as IUserFromDatabaseDTO;
  } catch (error) {
    switch (error.errno) {
      case 1062:
        throw new Error("User already exists");
      default:
        throw new Error("Error while creating new user");
    }
  }
};

export const findByEmail = async (email: string) => {
  const response: unknown = await Database.query(
    `SELECT * FROM users WHERE email = ?`,
    email
  );

  // TODO - refactor, add types
  const user = response as IUserFromDatabaseDTO[];
  if (user && user[0]) {
    return user[0];
  }
  return null;
};

export const validatePassword = async (password: string, hash: string) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch {
    throw new Error("Error while validating user password");
  }
};

export const createToken = (user: IUserForTokenDTO) => {
  return jwt.sign(user, process.env.JWT as string);
};
