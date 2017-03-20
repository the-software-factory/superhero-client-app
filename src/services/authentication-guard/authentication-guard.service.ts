
import { CanActivate, Router } from '@angular/router';
import { SessionService } from '../session/session.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationGuardService implements CanActivate {

  constructor(
    private _sessionService: SessionService,
    private _router: Router
  ) {}

  canActivate(): boolean {
    if (!this._sessionService.isAuthenticated()) {
      this._router.navigateByUrl('login');
      return false;
    }
    return true;
  }

}
