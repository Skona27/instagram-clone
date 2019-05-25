interface IUser {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUserFromDatabaseDTO extends IUser {
  id: string;
  hash: string;
  createdAt: string;
}

export interface IUserForCreationDTO extends IUser {
  password: string;
}

export interface IUserForLoginDTO {
  email: string;
  password: string;
}

export interface IUserForResponseDTO extends IUser {
  id: string;
  token: string;
}

export interface IUserForTokenDTO extends IUser {
  id: string;
}
