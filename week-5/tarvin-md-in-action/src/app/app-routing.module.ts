/*
; ============================================
; Title:  app-routing.module.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   10 Aug 2019
; Description: Assignment 5.4
;=============================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
