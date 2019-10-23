import { createAction, props } from '@ngrx/store';
import { User } from '../models/user';

export const addUser = createAction('[USER LIST] Add user', props<{ user: User }>());
export const setCurrentUser = createAction('[APP] Set current user', props<{ username: string }>());
export const clearCurrentUser = createAction('[APP] Clear current user');
