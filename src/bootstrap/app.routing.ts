
import { Routes } from '@angular/router';

import { AuthenticationGuardService } from '../services/authentication-guard/authentication-guard.service';

import { LoginPage } from '../pages/login/login.component';
import { HeroesPage } from '../pages/heroes/heroes.component';
import { CreateHeroPage } from '../pages/create-hero/create-hero.component';
import { LoginGuardService } from '../services/authentication-guard/login-guard.service';

export const ROUTING: Routes = [
  {
    path: 'login',
    canActivate: [ LoginGuardService ],
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
      },
      {
        path: 'create-hero',
        component: CreateHeroPage
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
