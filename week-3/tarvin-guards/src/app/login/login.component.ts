/*
; ============================================
; Title:  login.component.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   27 Jul 2019
; Description: Assignment 3.4 - Guarding Routes
;=============================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div class="container">
      <h1 class="home">Login to see our great selection of swines!!!</h1>
    </div>
  `,
  styles: [
    `
      .container {
        height: 100vh;
        background-color: darkgreen;
      }
      .home {
        background-color: greenyellow;
        width: 60%;
        margin: auto;
      }
    `
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
