
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTING } from './app.routing';

import { AppComponent } from './app.component';
import { LoginPage } from '../pages/login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTING)
  ],
  declarations: [
    AppComponent,
    LoginPage
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
