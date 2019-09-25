import { User, UserStatus } from '../models/user';

export const USERS: User[] = [
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
