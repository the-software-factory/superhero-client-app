
import { Component, OnDestroy } from '@angular/core';
import { ClientApiService } from '../../services/client-api/client-api.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.template.html',
  styleUrls: [ './login.style.scss' ]
})
export class LoginPage implements OnDestroy {

  /**
   * @var {string} The username we want to use for the login.
   */
  username: string;

  /**
   * @var {string} The password we want to use for the login.
   */
  password: string;

  /**
   * @var {string} A string to display if an error occurs.
   */
  error: string;

  constructor(
    private _clientApiService: ClientApiService,
    private _router: Router
  ) {}

  ngOnDestroy() {
    console.log('DESTROYED');
  }

  /**
   * Called when the user submit the form.
   */
  onSubmit() {
    console.log(this.username, this.password);

    this.error = '';
    this._clientApiService
      .login(this.username, this.password)
      .subscribe(
        (user: User) => {
          console.log('NEXT: ', user);
          this._router.navigateByUrl('heroes');
        },
        (error: Error) => {
          console.log('ERROR: ', error);
          this.error = 'API error :(';
        }
      );
  }

}
