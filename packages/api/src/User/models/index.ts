import * as bcrypt from "bcrypt";
import * as cryptoRandomString from "crypto-random-string";
import * as moment from "moment";
import { Database } from "../../Database";
import { INewUserDTO, IUserFromDatabaseDTO } from "../types";

// export const findUserByEmail = async (email: string) => {
//   const user = await Database.query(
//     `SELECT * FROM users WHERE email = ?`,
//     email
//   );
// };

export const createUser = async (user: INewUserDTO) => {
  const { email, firstName, lastName, password } = user;
  const hash = await bcrypt.hash(password, 10);
  const id = cryptoRandomString({ length: 16 });
  const createdAt = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");

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
};
