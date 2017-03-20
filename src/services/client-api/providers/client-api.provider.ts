
import { Http } from '@angular/http';
import { ClientApiService } from '../client-api.service';
import { SessionService } from '../../session/session.service';

export let ClientFactory = (http: Http, sessionService: SessionService) => {
  return new ClientApiService(
    application.env.API_URL,
    http,
    sessionService
  );
};

export let CLIENT_API_PROVIDER = {
  provide: ClientApiService,
  useFactory: ClientFactory,
  deps: [ Http, SessionService ]
};
