import { User } from './user';

export interface UserInfo extends User {
    location: string;
    bio: string;
    followers: number;
    following: number;
}
