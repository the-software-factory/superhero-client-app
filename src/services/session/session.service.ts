
import { Injectable } from '@angular/core';

import { CONFIG } from '../../config/config';

@Injectable()
export class SessionService {

  get token(): string {
    return localStorage.getItem(CONFIG.TOKEN_STORAGE_KEY);
  }

  set token(value: string) {
    localStorage.setItem(CONFIG.TOKEN_STORAGE_KEY, value);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

}
