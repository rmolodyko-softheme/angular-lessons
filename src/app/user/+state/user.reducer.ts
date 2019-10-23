import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../models/user';
import { addUser } from './user.actions';

export interface UserState {
  list: User[];
}

const initialState = { list: [] } as UserState;
const _userReducer = createReducer(
  initialState,
  on(addUser, (state: UserState, data) => ({ ...state, list: [...state.list.slice(), data.user]})),
);

export function userReducer(state: UserState | undefined, action: Action) {
  return _userReducer(state, action);
}
