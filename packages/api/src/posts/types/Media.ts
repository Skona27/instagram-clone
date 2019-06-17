export type IMediaType = "IMAGE" | "VIDEO";

export interface IMedia {
  id: string;
  postID: string;
  alt: string;
  src: string;
  type: IMediaType;
}
