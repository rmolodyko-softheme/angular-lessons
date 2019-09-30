import { Injectable } from '@angular/core';
import { UserStatus } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {
  statuses() {
    return [
      { text: UserStatus[UserStatus.Active], value: UserStatus.Active },
      { text: UserStatus[UserStatus.Disabled], value: UserStatus.Disabled },
      { text: UserStatus[UserStatus.Deleted], value: UserStatus.Deleted }
    ];
  }
}
