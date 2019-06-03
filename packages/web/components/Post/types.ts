export interface IAvatar {
  image: string;
  profileLink: string;
  height?: number;
}

export interface IPicture {
  image: string;
}

export interface IUsername {
  name: string;
}

export interface IComment {
  username: IUsername;
  avatar: IAvatar;
  text: string;
  date: Date;
}
