import { Injectable } from '@angular/core';
import { UserStatus } from '../models/user';

@Injectable()
export class UserDataService {
  rand = Math.random();

  private users = [
    {
      id: 1,
      name: 'Ruslan',
      status: UserStatus.Active,
      isVisible: true,
      logo: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y'
    },
    {
      id: 2,
      name: 'Roman',
      status: UserStatus.Deleted,
      isVisible: true,
      logo: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=monsterid&f=y'
    },
    {
      id: 3,
      name: 'Alex',
      status: UserStatus.Disabled,
      isVisible: true,
      logo: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=wavatar&f=y'
    },
    {
      id: 4,
      name: 'Megan',
      isVisible: false,
      logo: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y'
    },
    {
      id: 5,
      name: 'Alisa',
      isVisible: true,
      logo: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=robohash&f=y'
    }
  ];

  load() {
    return JSON.parse(JSON.stringify(this.users)); // Emulate immutable data
  }
}
