type IMediaType = "IMAGE" | "VIDEO";

export interface IMedia {
  type: IMediaType;
  src: string;
  alt: string;
}

export interface IPost {
  user: IAuthor;
  media: IMedia;
  comments: IComment[];
  description: string;
  likes: number;
  createdAt: number;
}

export interface IAuthor {
  name: string;
  photo: {
    src: string;
    alt: string;
  };
  profileLink: string;
}

export interface IComment {
  author: IAuthor;
  text: string;
  createdAt: number;
}
