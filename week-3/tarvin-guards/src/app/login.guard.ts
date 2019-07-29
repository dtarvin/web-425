/*
; ============================================
; Title:  login.guard.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   27 Jul 2019
; Description: Assignment 3.4 - Guarding Routes
;=============================================
*/

import { Injectable } from "@angular/core";
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    let loggedIn = Math.random() < 0.5;

    if (!loggedIn) {
      alert("You must log in to view that page. Taking you to login.");
      this.router.navigate(["/login"]);
    }

    return loggedIn;
  }
}
