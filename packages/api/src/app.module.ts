import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";
import { PostsModule } from "./posts";
import { config } from "./config";
import { UsersModule } from "./users";

@Module({
  imports: [TypeOrmModule.forRoot(config.database), PostsModule, UsersModule]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
