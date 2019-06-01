import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IUser } from "../models/User";

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
