import { Entity, Column, PrimaryColumn } from "typeorm";
import { IMedia, IMediaType } from "../types/Media";

@Entity()
export class Media implements IMedia {
  @PrimaryColumn()
  id: string;

  @Column()
  postID: string;

  @Column()
  alt: string;

  @Column()
  src: string;

  @Column()
  type: IMediaType;
}
