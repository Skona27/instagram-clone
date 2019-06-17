export interface ICreateCommentDTO {
  content: string;
}

export interface ICommentForResponse {
  id: string;
  content: string;
  authorID: string;
  createdAt: number;
}
