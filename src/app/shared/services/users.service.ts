import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVER, USERS, SEARCH, REPOS } from '../utils/constants';

@Injectable()
export class UsersService {

    constructor(private http: HttpClient) {}

    getUsersByName(userName: string) {
        return this.http.get<any[]>(`${URL_SERVER}/${SEARCH}/${USERS}?q=${userName}`);
    }

    getUserDetail(userName: string) {
        return this.http.get<any[]>(`${URL_SERVER}/${USERS}/${userName}`);
    }

    getUserRepositories(userName: string) {
        return this.http.get<any[]>(`${URL_SERVER}/${USERS}/${userName}/${REPOS}`);
    }
}
