type IMediaType = "IMAGE" | "VIDEO";

export interface IMedia {
  type: IMediaType;
  src: string;
  alt: string;
}

export interface IPost {
  author: IAuthor;
  media: IMedia[];
  comments: IComment[];
  description: string;
  likes: ILike[];
  createdAt: Date;
}

export interface IAuthor {
  login: string;
  photoUrl: string;
}

export interface IComment {
  author: IAuthor;
  content: string;
  createdAt: Date;
}

export interface ILike {
  authorLogin: string;
  createdAt: Date;
}
