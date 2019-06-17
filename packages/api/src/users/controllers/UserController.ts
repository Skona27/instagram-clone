import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { UserService } from "../services/UserService";
import { ICreateUserDTO, IUserForResponse } from "../dto/UsersDTOs";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Get(":id")
  findByID(@Param("id") id): Promise<IUserForResponse> {
    return this.usersService.findAByID(id);
  }

  @Post()
  create(@Body() createUsertDTO: ICreateUserDTO) {
    this.usersService.create(createUsertDTO);
  }
}
