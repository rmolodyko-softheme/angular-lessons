import { Component } from '@angular/core';
import { Gender, UserStatus } from '../../user/models/user';
import { UserStatusService } from '../../user/services/user-status.service';
import { UserState } from '../../user/+state/user.reducer';
import { Store } from '@ngrx/store';
import { addUser } from '../../user/+state/user.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(
    private store: Store<UserState>,
    public userStatusService: UserStatusService
  ) {
  }

  add(name: string, status: UserStatus) {
    this.store.dispatch(addUser({
        user: {
          id: Math.random(),
          name: name,
          status: +status,
          isVisible: true,
          date: new Date(),
          earned: 324,
          gender: Gender.Male,
          logo: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=robohash&f=y'
        }
      })
    );
  }
}
