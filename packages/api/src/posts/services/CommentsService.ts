import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ICommentForResponse, ICreateCommentDTO } from "../dto/CommentsDTOs";
import { Comment } from "../entities/Comment";
import * as cryptoRandomString from "crypto-random-string";
import { UserService } from "../../users/services/UserService";

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    private readonly usersService: UserService
  ) {}

  async findAllForPost(postID: string): Promise<ICommentForResponse[]> {
    const comments = await this.commentRepository.find({
      where: { postID },
      order: { createdAt: "ASC" }
    });

    const comment = comments.map(async comment => {
      const { id, content, authorID, createdAt } = comment;
      const author = await this.usersService.findAByID(authorID);
      const { login, photoUrl } = author;
      return { id, content, author: { login, photoUrl }, createdAt };
    });

    return Promise.all(comment);
  }

  create(postID: string, comment: ICreateCommentDTO) {
    const id = cryptoRandomString({ length: 16 });
    this.commentRepository.insert({
      ...comment,
      postID,
      id,
      createdAt: new Date()
    });
  }
}
