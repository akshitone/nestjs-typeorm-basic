import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// Validate incoming request for the user
export class UserSignUp {
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class UserSignUpResponse {
  id: number;
  username: string;
  email: string;
}
