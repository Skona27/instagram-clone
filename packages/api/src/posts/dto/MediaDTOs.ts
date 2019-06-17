import { IMediaType } from "../types/Media";

export interface ICreateMediaDTO {
  alt: string;
  src: string;
  type: IMediaType;
}

export interface IMediaForResponse {
  id: string;
  alt: string;
  src: string;
  type: IMediaType;
}
