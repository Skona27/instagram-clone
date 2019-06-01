import { IUserRepository } from "./types";
import { IUser, IUserForCreationDTO, IUserForUpdateDTO } from "../models/User";

export class UserMockRepository implements IUserRepository {
  private users: IUser[] = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      age: 31
    },
    {
      id: 2,
      firstName: "Lizzy",
      lastName: "Doe",
      age: 18
    },
    {
      id: 3,
      firstName: "Greg",
      lastName: "Doe",
      age: 21
    }
  ];

  getAllUsers = () => this.users;
  getUserByID = (id: number) => this.users.find(user => user.id === id) || null;

  addUser = (userForCreation: IUserForCreationDTO) => {
    const id = this.users[this.users.length - 1].id + 1;
    const user = { ...userForCreation, id };
    this.users.push(user);
    return user;
  };

  updateUser = (id: number, userForUpdate: IUserForUpdateDTO) => {
    const oldUserData = this.users.find(user => user.id === id);

    if (!oldUserData) {
      return null;
    }

    const userIndex = this.users.findIndex(user => user.id === id);
    const newUserData: IUser = { ...oldUserData, ...userForUpdate, id };

    this.users[userIndex] = newUserData;
    return newUserData;
  };

  removeUser = (id: number) => {
    const userIndex = this.users.findIndex(user => user.id === id);

    if (!userIndex) {
      return null;
    }

    this.users.splice(userIndex, 1);
  };
}
