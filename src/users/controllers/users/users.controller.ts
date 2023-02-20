import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserCreate } from 'src/users/dtos/create.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  getUsers() {
    return;
  }

  @Post()
  createUser(@Body() user: UserCreate) {
    return this.userService.createUser(user);
  }
}
