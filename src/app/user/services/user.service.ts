import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser() {
    return window.localStorage.getItem('current-user');
  }

  setUser(username: string) {
    window.localStorage.setItem('current-user', username);
  }
}
