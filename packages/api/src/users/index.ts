import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/User";
import { UsersController } from "./controllers/UserController";
import { UserService } from "./services/UserService";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UserService]
})
export class UsersModule {}
