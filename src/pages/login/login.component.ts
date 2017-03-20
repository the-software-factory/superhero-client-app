
import { Component } from '@angular/core';
import { ClientApiService } from '../../services/client-api/client-api.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.template.html',
  styleUrls: [ './login.style.scss' ]
})
export class LoginPage {

  /**
   * @var {string} The username we want to use for the login.
   */
  username: string;

  /**
   * @var {string} The password we want to use for the login.
   */
  password: string;

  constructor(
    private _clientApiService: ClientApiService,
    private _router: Router
  ) {}

  /**
   * Called when the user submit the form.
   */
  onSubmit() {
    console.log(this.username, this.password);
    this._clientApiService
      .login(this.username, this.password)
      .subscribe(
        (user: User) => {
          console.log('NEXT: ', user);
          this._router.navigateByUrl('heroes');
        },
        (error: Error) => console.log('ERROR: ', error)
      );
  }

}
