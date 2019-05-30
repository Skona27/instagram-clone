export interface IFooter {
  copyright: string;
  elements: ILink[];
}

export interface ILink {
  text: string;
  href: string;
}

export interface ICopyright {
  text: string;
}

export interface IBottomNav {
  elements: ILink[];
}
