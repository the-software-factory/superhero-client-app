
import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session/session.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'superhero-app',
  templateUrl: './app.template.html',
  styleUrls: [ './app.style.scss' ]
})

// Application entry point
export class AppComponent implements OnInit {

  user$: Observable<string>;

  constructor(
    private _sessionService: SessionService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.user$ = this._sessionService.getUserStream()
      .map((user: User) => !!user ? user.getDisplayName() : undefined);
  }

  onLogout() {
    this._sessionService.clear();
    this._router.navigateByUrl('login');
  }
}
