
import { Routes } from '@angular/router';

import { LoginPage } from '../pages/login/login.component';

export const ROUTING: Routes = [
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
