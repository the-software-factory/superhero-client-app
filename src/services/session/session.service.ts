
import { Injectable } from '@angular/core';

import { CONFIG } from '../../config/config';
import { User } from '../../models/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SessionService {

  private _userSubject: BehaviorSubject<User>;

  constructor() {
    this._userSubject = new BehaviorSubject(this.user);
  }

  get token(): string {
    return localStorage.getItem(CONFIG.TOKEN_STORAGE_KEY);
  }

  set token(value: string) {
    localStorage.setItem(CONFIG.TOKEN_STORAGE_KEY, value);
  }

  get user(): User {
    let storedUser = localStorage.getItem(CONFIG.USER_STORAGE_KEY);
    if (!storedUser) {
      return;
    }
    let userJson = JSON.parse(storedUser);
    let user = new User();
    user.username = userJson['username'];
    user.firstName = userJson['firstName'];
    user.lastName = userJson['lastName'];
    user.roles = userJson['roles'];
    return user;
  }

  set user(value: User) {
    localStorage.setItem(CONFIG.USER_STORAGE_KEY, JSON.stringify(value));
    this._userSubject.next(value);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  getUserStream(): Observable<User> {
    return this._userSubject.asObservable();
  }

  clear() {
    localStorage.clear();
    this._userSubject.next(this.user);
  }

}
