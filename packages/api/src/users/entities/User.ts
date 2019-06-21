import { Entity, Column, PrimaryColumn } from "typeorm";
import { IUser } from "../types/User";

@Entity()
export class User implements IUser {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  login: string;

  @Column()
  photoUrl: string;
}
