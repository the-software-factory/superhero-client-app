
import { Observable } from 'rxjs';

import { Http, RequestMethod, Response, ResponseContentType, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import { User } from '../../models/user';
import { SessionService } from '../session/session.service';

@Injectable()
export class ClientApiService {

  constructor(
    private _apiBaseURL: string,
    private _http: Http,
    private _sessionService: SessionService
  ) {}

  /**
   * Performs the login against the API.
   * @param {string} username
   * @param {string} password
   * @returns {Observable<User>}
   */
  login(username: string, password: string): Observable<User> {

    let token = btoa(`${username}:${password}`);

    let headers = new Headers();
    headers.set('Authorization', `Basic ${token}`);

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
      })
      .do((user: User) => this._sessionService.user = user)
      .do(() => this._sessionService.token = token);
  }

}
