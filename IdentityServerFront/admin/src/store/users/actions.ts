import {Dispatch} from 'redux';
import { UserFetchAction, UsersFetchdAction } from './actionTypes';
import ApiService from '../../../pages/api/api';
import { UserFetched, UsersFetched } from '../actionTypes';
import * as userSelector from './reducer'

export function fetchUsers(): (dispatch: Dispatch<UsersFetchdAction>) => Promise<any> {
    return async (dispatch: Dispatch<UsersFetchdAction>) => {
        const users = await ApiService.getAllUser();
        console.log(`fetchUsers`)
        dispatch({type: UsersFetched, users: users});
    };
};

export function fetchUser(userId: string): (dispatch: Dispatch<UserFetchAction>, getState) => Promise<any> {
    return async (dispatch: Dispatch<UserFetchAction>, getState) => {
        let user = userSelector.getUserById(userId, getState());
        if (!user) {
            user = await ApiService.getUserById(userId);
        }
    
        dispatch({type: UserFetched, user: user});
    };
}