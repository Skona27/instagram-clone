import { IHeader } from "../components/Header/types";
import { IFooter } from "../components/Footer/types";
import { IPost } from "../components/Post/types";

export interface IPageData {
  header: IHeader;
  footer: IFooter;
}

export interface IIndexPageData extends IPageData {
  posts: IPost[];
}
