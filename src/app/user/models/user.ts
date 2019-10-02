export enum UserStatus {
  Active,
  Disabled,
  Deleted
}

export interface User {
  id: number;
  name: string;
  status?: UserStatus;
  isVisible: boolean;
  logo: string;
}
