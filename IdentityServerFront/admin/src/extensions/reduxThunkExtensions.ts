import {ThunkDispatch} from 'redux-thunk';
import {Action} from "redux";
import {UserContext} from '../store/users/actionTypes';

export type Dispatch<A extends Action> = ThunkDispatch<UserContext, {}, A>;