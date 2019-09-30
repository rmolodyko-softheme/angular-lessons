import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: User[] = [];
  selectedUserId: number;

  constructor(private userDataService: UserDataService) {
    console.log(this.userDataService);
  }

  trackByFn(index: number, user: User) {
    return user.id;
  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }

  // -----------------------------------

  startLoadingUsers() {
    console.info('Load users');
    this.users = this.userDataService.load();
  }
}
