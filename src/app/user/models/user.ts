export enum UserStatus {
  Active,
  Disabled,
  Deleted
}

export enum Gender {
  Male,
  Female
}

export interface User {
  id: number;
  name: string;
  status?: UserStatus;
  isVisible: boolean;
  date: Date;
  earned: number;
  gender: Gender,
  logo: string;
}
