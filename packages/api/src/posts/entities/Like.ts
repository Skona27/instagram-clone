import { Entity, Column, PrimaryColumn } from "typeorm";
import { ILike } from "../types/Like";

@Entity()
export class Like implements ILike {
  @PrimaryColumn()
  id: string;

  @Column()
  postID: string;

  @Column()
  authorID: string;

  @Column()
  createdAt: Date;
}
