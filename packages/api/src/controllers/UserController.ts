import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete
} from "routing-controllers";
import { UserMockRepository } from "../services/UserMockRepository";
import { IUserRepository } from "../services/types";
import { IUserForCreationDTO, IUserForUpdateDTO } from "../models/User";

@JsonController()
export class UserController {
  private readonly userRepository: IUserRepository;

  constructor() {
    // TODO - check if in testing mode, switch repository
    this.userRepository = new UserMockRepository();
  }

  @Get("/users")
  getAll() {
    return this.userRepository.getAllUsers();
  }

  @Get("/users/:id")
  getOne(@Param("id") id: number) {
    return this.userRepository.getUserByID(id);
  }

  @Post("/users")
  post(@Body() userForCreation: IUserForCreationDTO) {
    return this.userRepository.addUser(userForCreation);
  }

  @Put("/users/:id")
  put(@Param("id") id: number, @Body() userForUpdate: IUserForUpdateDTO) {
    return this.userRepository.updateUser(id, userForUpdate);
  }

  @Delete("/users/:id")
  remove(@Param("id") id: number) {
    return this.userRepository.removeUser(id);
  }
}
