// src/types/user.ts

export type User = {
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  phone: string;
  role: string;
  bio: string;
  avatar: string | null;
};
