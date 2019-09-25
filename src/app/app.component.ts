import { Component } from '@angular/core';
import { User, UserStatus } from './models/user';
import { USERS } from './mock-data/users';

const users = USERS;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: User[] = [];

  // -----------------------------------

  startLoadingUsers() {
    console.info('Load users');
    // this.users = users;
    this.users = JSON.parse(JSON.stringify(users)); // Emulate immutable data
  }

  addPeter() {
    users.push({
      id: 6,
      isVisible: true,
      name: 'Peter',
      status: UserStatus.Active,
      logo: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
    });
  }
}
