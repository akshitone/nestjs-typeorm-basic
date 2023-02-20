export type UserCreateParams = {
  username: string;
  password: string;
  email: string;
};

export type UserUpdateParams = {
  username: string;
  password: string;
  email: string;
  isActive: boolean;
};

export type UserSignUpParams = {
  username: string;
  password: string;
  email: string;
};
