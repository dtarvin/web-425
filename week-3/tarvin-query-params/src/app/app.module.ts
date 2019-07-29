/*
; ============================================
; Title:  app.module.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   27 Jul 2019
; Description: Exercise 3.2 - Passing Data To Routes
;=============================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { E404Component } from './e404/e404.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    E404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
