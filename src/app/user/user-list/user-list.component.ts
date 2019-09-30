import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserDataService } from '../services/user-data.service';
import { UserStatusService } from '../services/user-status.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  selectedUserId: number;
  filterValue = '';
  filterStatus = '';

  constructor(private userDataService: UserDataService, public userStatusService: UserStatusService) {
    console.log(this.userDataService);
  }

  trackByFn(index: number, user: User) {
    return user.id;
  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }

  filterUsers() {
    return this.users
      .filter(item => this.filterValue ? item.name.toLowerCase().indexOf(this.filterValue.toLowerCase()) !== -1 : item)
      .filter(item => (this.filterStatus !== undefined && this.filterStatus.toString() !== '') ? item.status === +this.filterStatus : item)
    ;
  }

  ngOnInit() {
    this.users = this.userDataService.load();
  }
}
