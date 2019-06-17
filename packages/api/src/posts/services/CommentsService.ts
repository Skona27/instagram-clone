import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ICommentForResponse, ICreateCommentDTO } from "../dto/CommentsDTOs";
import { Comment } from "../entities/Comment";
import * as cryptoRandomString from "crypto-random-string";

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>
  ) {}

  async findAllForPost(postID: string): Promise<ICommentForResponse[]> {
    const comments = await this.commentRepository.find({ postID });

    return comments.map(comment => {
      const { id, content, authorID, createdAt } = comment;
      return { id, content, authorID, createdAt };
    });
  }

  create(postID: string, comment: ICreateCommentDTO) {
    const id = cryptoRandomString({ length: 16 });
    this.commentRepository.insert({
      ...comment,
      postID,
      id,
      createdAt: Date.now()
    });
  }
}
