import { Action } from '@ngrx/store';
import { User } from '../../models/user';

export const ADD_USERS = '[User] Add_Users';
export const ADD_USER = '[User] Add_User';

export class AddUsersAction implements Action {
    readonly type = ADD_USERS;
    constructor(public payload: User[]) { }
}

export class AddCurrentUserAction implements Action {
    readonly type = ADD_USER;
    constructor(public payload: User) { }
}

export type Actions = AddUsersAction | AddCurrentUserAction;
