
import { CanActivate } from '@angular/router';
import { SessionService } from '../session/session.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationGuardService implements CanActivate {

  constructor(private _sessionService: SessionService) {}

  canActivate(): boolean {
    return this._sessionService.isAuthenticated();
  }

}
