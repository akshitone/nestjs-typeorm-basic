import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UserCreate } from 'src/users/dtos/create.dto';
import { UserSignUp } from 'src/users/dtos/signUp.dto';
import { UserUpdate } from 'src/users/dtos/update.dto';
import { UsersService } from 'src/users/services/users/users.service';

// Controllers are used to routing requests
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  getUsers() {
    return this.userService.findUsers();
  }

  @Post()
  createUser(@Body() user: UserCreate) {
    return this.userService.createUser(user);
  }

  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) userId: number,
    @Body() user: UserUpdate,
  ) {
    await this.userService.updateUser(userId, user);
  }

  @Post('/auth/signup')
  async signUp(@Body() user: UserSignUp) {
    return await this.userService
      .signUp(user)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
