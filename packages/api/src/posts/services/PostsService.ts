import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ICreatePostDTO } from "../dto/PostsDTOs";
import { Post } from "../entities/Post";
import { IResponsePostDTO } from "../dto/PostsDTOs";
import { MediaService } from "./MediaService";
import { CommentsService } from "./CommentsService";
import * as cryptoRandomString from "crypto-random-string";
import { UserService } from "../../users/services/UserService";
import { LikesService } from "./LikesService";

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    private readonly mediaService: MediaService,
    private readonly commentsService: CommentsService,
    private readonly userService: UserService,
    private readonly likesService: LikesService
  ) {}

  async findAll(): Promise<IResponsePostDTO[]> {
    const posts = await this.postRepository.find({
      order: { createdAt: "DESC" }
    });
    const post = posts.map(async post => {
      const comments = await this.commentsService.findAllForPost(post.id);
      const media = await this.mediaService.findAllForPost(post.id);
      const author = await this.userService.findAByID(post.authorID);
      const likes = await this.likesService.findAllForPost(post.id);

      const { id, description, createdAt } = post;
      const { login, photoUrl } = author;
      return {
        id,
        description,
        createdAt,
        comments,
        author: { login, photoUrl },
        media,
        likes
      };
    });

    return await Promise.all(post);
  }

  async findByID(postID: string): Promise<IResponsePostDTO> {
    const post = await this.postRepository.findOne({ id: postID });
    const comments = await this.commentsService.findAllForPost(postID);
    const media = await this.mediaService.findAllForPost(postID);
    const author = await this.userService.findAByID(post.authorID);
    const likes = await this.likesService.findAllForPost(postID);

    const { id, description, createdAt } = post;
    const { login, photoUrl } = author;
    return {
      id,
      description,
      createdAt,
      comments,
      author: { login, photoUrl },
      media,
      likes
    };
  }

  async create(postForCreation: ICreatePostDTO) {
    const postID = cryptoRandomString({ length: 16 });

    const { media, description, authorID } = postForCreation;
    await this.postRepository.insert({
      description,
      id: postID,
      authorID,
      createdAt: new Date()
    });

    const promises = media.map(async singleMedia => {
      await this.mediaService.create(postID, singleMedia);
    });

    await Promise.all(promises);
  }
}
