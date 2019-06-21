import { IUserForResponse } from "../../users/dto/UsersDTOs";

export interface ILikeForCreationDTO {
  authorID: string;
}

export interface ILikeForResponseDTO {
  id: string;
  authorLogin: IUserForResponse["login"];
  createdAt: Date;
}
