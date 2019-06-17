import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as cryptoRandomString from "crypto-random-string";
import { User } from "../entities/User";
import { ICreateUserDTO, IUserForResponse } from "../dto/UsersDTOs";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async findAByID(userID: string): Promise<IUserForResponse> {
    const user = await this.userRepository.findOne({ id: userID });
    const { email, login } = user;
    return { email, login };
  }

  async create(createUserDTO: ICreateUserDTO) {
    const id = cryptoRandomString({ length: 16 });
    await this.userRepository.insert({ ...createUserDTO, id });
  }
}
