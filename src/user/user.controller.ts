import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from './user.service';
import { CreateNewUserRequest } from "./createNewUserRequest.entity";

@Controller('user')
export class UserController {

  public constructor(private readonly userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getById(@Param('id') id: string){
    return this.userService.getById(id);
  }

  @Post()
  create(@Body() createNewUserRequest: CreateNewUserRequest){
    return this.userService.createUser(createNewUserRequest);
  }

}
