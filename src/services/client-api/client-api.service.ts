
import { Observable } from 'rxjs';

import { Http, RequestMethod, Response, ResponseContentType, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import { User } from '../../models/user';
import { SessionService } from '../session/session.service';
import { Superhero } from '../../models/superhero';

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

  getSuperheroes(): Observable<Superhero[]> {

    let headers = new Headers();
    headers.set('Authorization', `Basic ${this._sessionService.token}`);

    return this._http.request(
      `${this._apiBaseURL}/superheroes`,
      {
        method: RequestMethod.Get,
        responseType: ResponseContentType.Json,
        headers: headers
      }
    )
      .map((response: Response) => response.json())
      .flatMap((jsonResponse: any[]) => Observable.from(jsonResponse))
      .map((superheroJson: any) => {
        let superhero = new Superhero();
        superhero.id = superheroJson['id'];
        superhero.name = superheroJson['name'];
        superhero.realName = superheroJson['realName'];
        superhero.location = superheroJson['location'];
        superhero.hasCloak = superheroJson['hasCloak'];
        superhero.picture = superheroJson['picture'];
        superhero.birthDate = new Date(superheroJson['birthDate']);
        return superhero
      })
      .toArray();
  }

  createSuperHero(superHero: Superhero): Observable<Superhero> {
    return Observable
      .of(this._sessionService.token)
      .map((token: string) => {
        let headers = new Headers();
        headers.set('Authorization', `Basic ${token}`);
        return headers;
      })
      .flatMap((headers: Headers) => {
        let birthDate = superHero.birthDate;
        let year = birthDate.getFullYear();
        let month = birthDate.getMonth();
        let date = birthDate.getDate();

        return this._http.post(
          `${this._apiBaseURL}/superheroes`,
          {
            name: superHero.name,
            realName: superHero.realName,
            hasCloak: superHero.hasCloak,
            location: superHero.location,
            picture: superHero.picture,
            birthDate: `${year}/${month < 10 ? '0'+month : month}/${date < 10 ? '0'+date : date}`
          },
          {
            headers,
            responseType: ResponseContentType.Json
          }
        );
      })
      .map((response: Response) => response.json())
      .map((data: any) => {
        superHero.id = data.id;
        return superHero;
      });
  }

}
