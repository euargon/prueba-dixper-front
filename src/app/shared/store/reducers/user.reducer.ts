import { User } from '../../models/user';
import * as UserActions from '../actions/user.actions';

const initialState: User = {
    id: 0,
    login: '',
    avatar_url: '',
    score: 0
};

export function reducer(state: User[] = [initialState], action: UserActions.AddUsersAction) {

    switch (action.type) {
        case UserActions.ADD_USERS:
            return [...state, action.payload];
        default:
            return state;
    }
}

export function userReducer(state: User = initialState, action: UserActions.AddCurrentUserAction) {
    switch (action.type) {
        case UserActions.ADD_USER:
            return [state, action.payload];
        default:
            return state;
    }
}
