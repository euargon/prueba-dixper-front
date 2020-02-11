import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { UserInfo } from '../models/user-info';
import { Repository } from '../models/repository';

@Injectable()
export class Mappers {

    public mapUserList(userList: any[]): User[] {
        const userListMapped: User[] = [];
        let userTemp: User;

        userList.forEach((user) => {
            userTemp = {
                id: user.id,
                login: user.login,
                avatar_url: user.avatar_url,
                score: user.score
            };
            userListMapped.push(userTemp);
        });

        return userListMapped;
    }

    public mapUserDetails(user: any): UserInfo {
        let userInfo: UserInfo;

        userInfo = {
            id: user.id,
            score: user.score,
            avatar_url: user.avatar_url,
            login: user.login,
            location: user.location,
            bio: user.bio,
            followers: user.followers,
            following: user.following
        };

        return userInfo;
    }

    public mapUserRepos(repos: any[]): Repository[] {
        const userRepos: Repository[] = [];
        let repoTemp: Repository;

        repos.forEach((repo) => {
            repoTemp = {
                name: repo.name,
                private: repo.private,
                size: repo.size,
                forks: repo.forks,
                created_at: repo.created_at,
                updated_at: repo.updated_at,
                url: repo.url,
                open_issues: repo.open_issues
            };
        });

        return repos;
    }
}
