import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.actions';

export interface CounterState {
  count: number;
}

const initialState = { count: 0 };
const _counterReducer = createReducer(
  initialState,
  on(increment, (state: CounterState, data) => ({ ...state, count: state.count + (data.step || 1) })),
  on(decrement, (state: CounterState) => ({ ...state, count: state.count - 1 }))
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
