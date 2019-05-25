import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import * as cryptoRandomString from "crypto-random-string";
import * as moment from "moment";
import * as dotenv from "dotenv";
import { Database, IDatabaseResponse } from "../../Database";
import { ResponseError } from "../../Error";
import {
  IUserForCreationDTO,
  IUserForTokenDTO,
  IUserFromDatabaseDTO
} from "../index";

dotenv.config();

export const create = async (userForCreation: IUserForCreationDTO) => {
  const { email, firstName, lastName, password } = userForCreation;
  const hash = await bcrypt.hash(password, 10);
  const id = cryptoRandomString({ length: 16 });
  const createdAt = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");

  const response: IDatabaseResponse<IUserFromDatabaseDTO> = {
    error: null,
    data: null
  };

  try {
    // TODO - Add user data validation
    await Database.query(
      `INSERT INTO users (id, email, hash, firstName, lastName, createdAt) VALUES (?,?,?,?,?,?)`,
      [id, email, hash, firstName, lastName, createdAt]
    );
    response.data = { id, email, hash, firstName, lastName, createdAt };
  } catch (error) {
    response.error = new ResponseError(1062, "User already exists");
  }
  return response as IDatabaseResponse<IUserFromDatabaseDTO>;
};

export const findByEmail = async (email: string) => {
  const response: IDatabaseResponse<IUserFromDatabaseDTO> = {
    error: null,
    data: null
  };

  const usersArray: unknown = await Database.query(
    `SELECT * FROM users WHERE email = ?`,
    email
  );

  if (Array.isArray(usersArray) && usersArray.length) {
    response.data = usersArray[0];
  } else {
    response.error = new ResponseError(1, "User does not exist");
  }

  return response;
};

export const validatePassword = async (password: string, hash: string) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch {
    return false;
  }
};

export const createToken = (user: IUserForTokenDTO) => {
  return jwt.sign(user, process.env.JWT as string);
};
