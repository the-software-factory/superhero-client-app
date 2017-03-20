
import { NgModule } from '@angular/core';

import { CLIENT_API_PROVIDER } from './client-api/providers/client-api.provider';
import { SessionService } from './session/session.service';
import { AuthenticationGuardService } from './authentication-guard/authentication-guard.service';

@NgModule({
  id: 'superhero.services.module',
  providers: [
    CLIENT_API_PROVIDER,
    SessionService,
    AuthenticationGuardService
  ]
})
export class ServicesModule {}
