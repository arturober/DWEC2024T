import { User } from "src/app/auth/interfaces/user";

export interface Comment {
  id?: number;
  text: string;
  date?: string;
  user?: User;
}
