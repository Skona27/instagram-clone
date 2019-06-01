export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}

export type IUserForCreationDTO = Omit<IUser, "id">;

export interface IUserForUpdateDTO {
  firstName?: string;
  lastName?: string;
  age?: number;
}
