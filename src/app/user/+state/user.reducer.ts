import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../models/user';
import { addUser, clearCurrentUser, setCurrentUser } from './user.actions';

export interface UserState {
  list: User[];
  currentUsername: string;
}

const initialState = { list: [] } as UserState;
const _userReducer = createReducer(
  initialState,
  on(addUser, (state: UserState, data) => ({ ...state, list: [...state.list.slice(), data.user]})),
  on(setCurrentUser, (state: UserState, data) => ({ ...state, currentUsername: data.username })),
  on(clearCurrentUser, (state: UserState) => ({ ...state, currentUsername: null })),
);

export function userReducer(state: UserState | undefined, action: Action) {
  return _userReducer(state, action);
}
