import { CounterState } from './+state/counter.reducer';
import { UserState } from './user/+state/user.reducer';

export interface AppState {
  count: CounterState;
  user: UserState;
}
