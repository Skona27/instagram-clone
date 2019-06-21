import { IUserForResponse } from "../../users/dto/UsersDTOs";

export interface ICreateCommentDTO {
  content: string;
  authorID: string;
}

export interface ICommentForResponse {
  id: string;
  content: string;
  author: Pick<IUserForResponse, "login" | "photoUrl">;
  createdAt: Date;
}
