import { createAction, props } from '@ngrx/store';

export const increment = createAction('[APP] Increment', props<{ step?: number }>());
export const decrement = createAction('[APP] Decrement');
