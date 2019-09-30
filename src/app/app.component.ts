import { Component } from '@angular/core';
import { User } from './models/user';
import { USERS } from './mock-data/users';

const users = USERS;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: User[] = [];
  selectedUserId: number;

  trackByFn(index: number, user: User) {
    return user.id;
  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }

  // -----------------------------------

  startLoadingUsers() {
    console.info('Load users');
    // this.users = users;
    this.users = JSON.parse(JSON.stringify(users)); // Emulate immutable data
  }
}
