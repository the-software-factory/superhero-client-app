
import { Component } from '@angular/core';

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

  /**
   * Called when the user submit the form.
   */
  onSubmit() {
    console.log(this.username, this.password);
  }

}
