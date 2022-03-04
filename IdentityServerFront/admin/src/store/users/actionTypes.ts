import User from "../../models/User";
import * as ActionTypes from "../actionTypes";

export interface UserContext {
    users: User[];
    usersIsLoading: boolean;
};

export type UsersFetchdAction = {
    type: typeof ActionTypes.UsersFetched;
    users: User[];
};

export type UsersIsLoadingAction = {
    type: typeof ActionTypes.UsersIsLoading;
    usersIsLoading: boolean;
};

export type UserFetchAction = {
    type: typeof ActionTypes.UserFetched;
    user: User;
};


export type Action = UsersFetchdAction | UsersIsLoadingAction | UserFetchAction;
