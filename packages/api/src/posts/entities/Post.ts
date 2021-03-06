import { Entity, Column, PrimaryColumn } from "typeorm";
import { IPost } from "../types/Post";

@Entity()
export class Post implements IPost {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  createdAt: Date;

  @Column()
  authorID: string;
}
