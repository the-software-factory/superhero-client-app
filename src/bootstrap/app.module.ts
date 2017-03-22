
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTING } from './app.routing';

import { ServicesModule } from '../services/services.module';

import { AppComponent } from './app.component';
import { LoginPage } from '../pages/login/login.component';
import { HeroesPage } from '../pages/heroes/heroes.component';
import { CreateHeroPage } from '../pages/create-hero/create-hero.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTING),
    ServicesModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    LoginPage,
    HeroesPage,
    CreateHeroPage
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
