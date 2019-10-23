import { Injectable } from '@angular/core';
import { Gender, User, UserStatus } from '../models/user';

@Injectable()
export class UserDataService {
  rand = Math.random();

  private users: User[] = [
    {
      id: 1,
      name: 'Ruslan',
      status: UserStatus.Active,
      isVisible: true,
      date: new Date(),
      earned: 324.23,
      gender: Gender.Male,
      logo: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y'
    },
    {
      id: 2,
      name: 'Roman',
      status: UserStatus.Deleted,
      isVisible: true,
      date: new Date(),
      earned: 24,
      gender: Gender.Male,
      logo: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=monsterid&f=y'
    },
    {
      id: 3,
      name: 'Alex',
      status: UserStatus.Disabled,
      isVisible: true,
      date: new Date(),
      earned: 343,
      gender: Gender.Male,
      logo: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=wavatar&f=y'
    },
    {
      id: 4,
      name: 'Megan',
      isVisible: false,
      date: new Date(),
      earned: 4.3,
      gender: Gender.Female,
      logo: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y'
    },
    {
      id: 5,
      name: 'Alisa',
      isVisible: true,
      date: new Date(),
      earned: 30000,
      gender: Gender.Female,
      logo: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=robohash&f=y'
    }
  ];

  load() {
    return JSON.parse(JSON.stringify(this.users)); // Emulate immutable data
  }
}
