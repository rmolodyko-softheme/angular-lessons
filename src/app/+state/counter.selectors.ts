import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectCount = createSelector((state: AppState) => state.count, state => state.count);
