import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ILikeForCreationDTO, ILikeForResponseDTO } from "../dto/LikesDTOs";
import { Like } from "../entities/Like";
import * as cryptoRandomString from "crypto-random-string";
import { UserService } from "../../users/services/UserService";

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Like)
    private readonly likeRepository: Repository<Like>,
    private readonly userService: UserService
  ) {}

  async findAllForPost(postID: string): Promise<ILikeForResponseDTO[]> {
    const likes = await this.likeRepository.find({
      where: { postID },
      order: { createdAt: "ASC" },
      cache: true
    });
    const like = likes.map(async like => {
      const { authorID, createdAt, id } = like;
      const author = await this.userService.findAByID(authorID);
      const { login } = author;
      return { id, authorLogin: login, createdAt };
    });

    return Promise.all(like);
  }

  async create(postID: string, like: ILikeForCreationDTO) {
    const id = cryptoRandomString({ length: 16 });
    await this.likeRepository.insert({
      ...like,
      postID,
      id,
      createdAt: new Date()
    });
  }
}
