import { Pipe, PipeTransform } from '@angular/core';
import { UserStatus } from '../models/user';
import { UserStatusToTextService } from '../services/user-status-to-text.service';

@Pipe({
  name: 'badgeText'
})
export class BadgeTextPipe implements PipeTransform {
  constructor(private userStatusToTextService: UserStatusToTextService) {}

  transform(value: any, userStatus?: UserStatus) {
    return `${value} (${this.userStatusToTextService.convert(userStatus)})`;
  }
}
