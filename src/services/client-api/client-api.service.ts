
import { Http, RequestMethod, Response, ResponseContentType } from '@angular/http';

import { Observable } from 'rxjs';
import { User } from '../../models/user';

export class ClientApiService {

  constructor(private _http: Http) {}

  /**
   * Performs the login against the API.
   * @param {string} username
   * @param {string} password
   * @returns {Observable<User>}
   */
  login(username: string, password: string): Observable<User> {
    return this._http.request(
      'url',
      {
        method: RequestMethod.Post,
        responseType: ResponseContentType.Json,
        body: {
          username: username,
          password: password
        }
      }
    )
      .map((response: Response) => response.json())
      .map((jsonResponse: any) => {
        let user = new User();
        user.name = jsonResponse['name'];
        user.username = jsonResponse['username'];
        return user;
      });
  }

}
