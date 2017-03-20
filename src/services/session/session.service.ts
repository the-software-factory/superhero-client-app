
import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  private _token: string;

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  isAuthenticated(): boolean {
    return !!this._token;
  }

}
