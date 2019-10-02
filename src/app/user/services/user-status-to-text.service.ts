import { Injectable } from '@angular/core';
import { UserStatus } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserStatusToTextService {

  convert(status: UserStatus) {
    switch(status) {
      case UserStatus.Active:
        return 'Active';
      case UserStatus.Disabled:
        return 'Disabled';
      case UserStatus.Deleted:
        return 'Deleted';
      default:
        return 'Unknown';
    }
  }
}
