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

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    private readonly mediaService: MediaService,
    private readonly commentsService: CommentsService,
    private readonly userService: UserService
  ) {}

  async findAll(): Promise<IResponsePostDTO[]> {
    const posts = await this.postRepository.find();
    const post = posts.map(async post => {
      const comments = await this.commentsService.findAllForPost(post.id);
      const media = await this.mediaService.findAllForPost(post.id);
      const user = await this.userService.findAByID(post.authorID);

      return {
        ...post,
        comments,
        user,
        media,
        likes: 0
      };
    });

    return await Promise.all(post);
  }

  async findByID(id: string): Promise<IResponsePostDTO> {
    const post = await this.postRepository.findOne({ id });
    const comments = await this.commentsService.findAllForPost(id);
    const media = await this.mediaService.findAllForPost(id);
    const user = await this.userService.findAByID(post.authorID);

    return { ...post, comments, user, media, likes: 0 };
  }

  async create(postForCreation: ICreatePostDTO) {
    const postID = cryptoRandomString({ length: 16 });

    const { media, description, authorID } = postForCreation;
    await this.postRepository.insert({
      description,
      id: postID,
      authorID,
      createdAt: Date.now()
    });

    const promises = media.map(async singleMedia => {
      await this.mediaService.create(postID, singleMedia);
    });

    await Promise.all(promises);
  }
}
