import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { PostsService } from "../services/PostsService";
import { ICreatePostDTO, IResponsePostDTO } from "../dto/PostsDTOs";
import { ICreateCommentDTO } from "../dto/CommentsDTOs";
import { CommentsService } from "../services/CommentsService";
import { ILikeForCreationDTO } from "../dto/LikesDTOs";
import { LikesService } from "../services/LikesService";

@Controller("posts")
export class PostsController {
  constructor(
    private readonly postService: PostsService,
    private readonly commentService: CommentsService,
    private readonly likesService: LikesService
  ) {}

  @Get()
  findAll(): Promise<IResponsePostDTO[]> {
    return this.postService.findAll();
  }

  @Get(":id")
  findByID(@Param("id") id): Promise<IResponsePostDTO> {
    return this.postService.findByID(id);
  }

  // @TODO - Send user token in headers
  @Post()
  create(@Body() createPostDTO: ICreatePostDTO) {
    this.postService.create(createPostDTO);
  }

  @Post(":id/comments")
  comment(@Param("id") id, @Body() createComment: ICreateCommentDTO) {
    this.commentService.create(id, createComment);
  }

  @Post(":id/likes")
  like(@Param("id") id, @Body() createLike: ILikeForCreationDTO) {
    this.likesService.create(id, createLike);
  }
}
