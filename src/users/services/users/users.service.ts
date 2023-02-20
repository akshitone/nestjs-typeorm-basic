import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/users.entity';
import {
  UserCreateParams,
  UserSignUpParams,
  UserUpdateParams,
} from 'src/utils/types';
import { Repository } from 'typeorm';
import * as argon from 'argon2';
import { UserSignUpResponse } from 'src/users/dtos/signUp.dto';

// In services, business logics are developed
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>, // just getting ORM and utilize it later on
  ) {}

  findUsers() {
    return this.userRepository.find();
  }

  // what data we actually need to store in the database using Params type
  createUser(user: UserCreateParams) {
    return this.userRepository.save(user);
  }

  updateUser(userId: number, user: UserUpdateParams) {
    return this.userRepository.update(
      { id: userId },
      { ...user, updatedAt: new Date() },
    );
  }

  async signUp(user: UserSignUpParams): Promise<UserSignUpResponse | void> {
    return await argon
      .hash(user.password)
      .then(async (hashingPassword) => {
        user.password = hashingPassword;
        const savedUser = this.userRepository.save(user);
        return {
          id: (await savedUser).id,
          username: (await savedUser).username,
          email: (await savedUser).email,
        };
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
