import { UserContext, Action } from "./actionTypes";
import User from "../../models/User";
import * as ActionType from "../actionTypes"
import IState from "../../view_models/IState";
import Users from "../../../pages/users";

const state: UserContext = {
    users: [] as User[],
    usersIsLoading: false
};

export const initialState = state;

const userContext = (state = initialState, action: Action): UserContext & any => {
    switch (action.type) {
        case ActionType.UsersFetched:
            console.log('ActionType.UsersFetched')
            return {
                ...state,
                users: action.users
            };
        case ActionType.UsersIsLoading:
            return {
                ...state,
                usersIsLoading: action.usersIsLoading
            };
        case ActionType.UserFetched:
            return {
                ...state,
                users: [...state.users, action.user]
            }
        default:
            return state;
    }
};

export default userContext;

export function getUsers(userState: IState): User[] {
    return userState.userContext.users;
};

export function getUserById(userId: string, userState: IState): User {
    return userState.userContext.users?.find(u => u.Id === userId);
};