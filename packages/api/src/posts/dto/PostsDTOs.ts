import { IPost } from "../types/Post";
import { IMedia } from "../types/Media";
import { IMediaForResponse } from "./MediaDTOs";
import { ICommentForResponse } from "./CommentsDTOs";

export interface ICreatePostDTO {
  description: string;
  media: IMedia[];
  authorID: string;
}

export interface IResponsePostDTO extends IPost {
  comments: ICommentForResponse[];
  media: IMediaForResponse[];
  user: any;
  likes: number;
  createdAt: number;
}
