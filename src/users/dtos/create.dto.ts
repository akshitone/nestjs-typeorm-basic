import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// Validate incoming request for the user
export class UserCreate {
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
  isActive: boolean;
}
