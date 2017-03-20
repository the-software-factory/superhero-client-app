
import { Routes } from '@angular/router';

import { AuthenticationGuardService } from '../services/authentication-guard/authentication-guard.service';

import { LoginPage } from '../pages/login/login.component';
import { HeroesPage } from '../pages/heroes/heroes.component';

export const ROUTING: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: '',
    canActivate: [ AuthenticationGuardService ],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'heroes'
      },
      {
        path: 'heroes',
        component: HeroesPage
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
