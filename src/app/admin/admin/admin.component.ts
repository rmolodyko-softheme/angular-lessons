import { Component, OnInit } from '@angular/core';
import { UserStatus } from '../../user/models/user';
import { UserDataService } from '../../user/services/user-data.service';
import { UserStatusService } from '../../user/services/user-status.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(
    private userDataService: UserDataService,
    public userStatusService: UserStatusService
  ) {
  }

  add(name: string, status: UserStatus) {
    console.log('add');
    this.userDataService.add(name, +status)
  }
}
