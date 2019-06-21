import { Entity, Column, PrimaryColumn } from "typeorm";
import { IComment } from "../types/Comment";

@Entity()
export class Comment implements IComment {
  @PrimaryColumn()
  id: string;

  @Column()
  postID: string;

  @Column()
  content: string;

  @Column()
  authorID: string;

  @Column()
  createdAt: Date;
}
