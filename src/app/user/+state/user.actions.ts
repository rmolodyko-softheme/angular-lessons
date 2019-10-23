import { createAction, props } from '@ngrx/store';
import { User } from '../models/user';

export const addUser = createAction('[USER LIST] Add user', props<{ user: User }>());
