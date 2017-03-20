
import { Http, RequestMethod, Response, ResponseContentType, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import { User } from '../../models/user';

export class ClientApiService {

  constructor(
    private _apiBaseURL: string,
    private _http: Http
  ) {}

  /**
   * Performs the login against the API.
   * @param {string} username
   * @param {string} password
   * @returns {Observable<User>}
   */
  login(username: string, password: string): Observable<User> {

    let headers = new Headers();
    headers.set('Authorization', `Basic ${btoa(`${username}:${password}`)}`);

    return this._http.request(
      `${this._apiBaseURL}/login`,
      {
        method: RequestMethod.Get,
        responseType: ResponseContentType.Json,
        headers: headers
      }
    )
      .map((response: Response) => response.json())
      .map((jsonResponse: any) => {
        let user = new User();
        user.username = jsonResponse['username'];
        user.firstName = jsonResponse['firstName'];
        user.lastName = jsonResponse['lastName'];
        user.roles = jsonResponse['roles'];
        return user;
      });
  }

}
