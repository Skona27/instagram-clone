export interface IUserFromDatabaseDTO {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  hash: string;
  createdAt: string;
}

export interface INewUserDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
