export interface IAvatar {
  image: IImage;
  profileLink: string;
  height?: number;
}

export interface IImage {
  src: string;
  alt: string;
}

export interface IAuthor {
  avatar: IAvatar;
  name: string;
}

export interface IComment {
  username: string;
  avatar: IAvatar;
  text: string;
  date: Date;
}
