import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';

const selectUserFeature = (state: AppState) => state.user;

export const selectUsers = createSelector(selectUserFeature, state => state.list);
export const selectUser = createSelector(selectUserFeature, (state, params) => state.list.find(user => user.id === params.id));
