import { User } from "./user";

export interface TokenResponse {
  accessToken: string;
}

export interface UserResponse {
  user: User;
}
