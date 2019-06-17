import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostsController } from "./controllers/PostsController";
import { PostsService } from "./services/PostsService";
import { CommentsService } from "./services/CommentsService";
import { Comment } from "./entities/Comment";
import { Post } from "./entities/Post";
import { Media } from "./entities/Media";
import { MediaService } from "./services/MediaService";
import { UserService } from "../users/services/UserService";
import { User } from "../users/entities/User";

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
    TypeOrmModule.forFeature([Comment]),
    TypeOrmModule.forFeature([Media]),
    TypeOrmModule.forFeature([User])
  ],
  controllers: [PostsController],
  providers: [PostsService, CommentsService, MediaService, UserService]
})
export class PostsModule {}
