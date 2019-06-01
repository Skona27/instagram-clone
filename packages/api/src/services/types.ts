import { IUser, IUserForCreationDTO, IUserForUpdateDTO } from "../models/User";

export interface IUserRepository {
  getAllUsers: () => IUser[];
  getUserByID: (id: number) => IUser | null;
  addUser: (user: IUserForCreationDTO) => IUser;
  updateUser: (id: number, user: IUserForUpdateDTO) => IUser | null;
  removeUser: (id: number) => void | null;
}
