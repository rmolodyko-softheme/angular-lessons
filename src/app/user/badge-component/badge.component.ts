import { Component, Input } from '@angular/core';
import { UserStatus } from '../models/user';

@Component({
  selector: 'app-badge-component',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  @Input() status: UserStatus;
  statusTypes = UserStatus;
}
