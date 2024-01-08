import { User } from "./user";

export interface Profile {
  username: string;
  displayName: string;
  bio?: string;
  image?: string;
  photos?: Photo[];

  followersCount: number;
  followingCount: number;
  following: boolean;
}

export interface UserActivity {
  id: string;
  title: string;
  category: string;
  date: Date;
}

export class Profile implements Profile {
  constructor(user: User) {
    this.username = user.username;
    this.displayName = user.displayName;
    this.image = user.image;
  }
}

export interface Photo {
  id: string;
  url: string;
  isMain: boolean;
}
