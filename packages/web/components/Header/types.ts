export interface IHeader {
  logo: ILogo;
  elements: ILink[];
}

export interface ILogo {
  url: string;
  title: string;
  href: string;
}

export interface ILink {
  text: string;
  href: string;
}
