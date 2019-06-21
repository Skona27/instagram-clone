import { IPost } from "../types/Post";
import { IMedia } from "../types/Media";
import { IMediaForResponse } from "./MediaDTOs";
import { ICommentForResponse } from "./CommentsDTOs";
import { ILikeForResponseDTO } from "./LikesDTOs";
import { IUserForResponse } from "../../users/dto/UsersDTOs";

export interface ICreatePostDTO {
  description: string;
  media: IMedia[];
  authorID: string;
}

export interface IResponsePostDTO {
  id: string;
  description: string;
  comments: ICommentForResponse[];
  media: IMediaForResponse[];
  author: Pick<IUserForResponse, "login" | "photoUrl">;
  likes: ILikeForResponseDTO[];
  createdAt: Date;
}
