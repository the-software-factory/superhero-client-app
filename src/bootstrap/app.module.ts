
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTING } from './app.routing';

import { ServicesModule } from '../services/services.module';

import { AppComponent } from './app.component';
import { LoginPage } from '../pages/login/login.component';
import { HeroesPage } from '../pages/heroes/heroes.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTING),
    ServicesModule
  ],
  declarations: [
    AppComponent,
    LoginPage,
    HeroesPage
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
