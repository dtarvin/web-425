/*
; ============================================
; Title:  e404.component.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   27 Jul 2019
; Description: Exercise 3.2 - Passing Data To Routes
;=============================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
    <div class="container">
      <div class="row">
        <h2>Could it be that you are lost? I wish I could help you find what you are looking for.</h2>
      </div>
    </div>
  `,
  styles: [
    `
    .container {
      margin: 20px auto;
      border: double 4px blue;
      width: 60%;
    }
    h2 {
      padding: 10px;
      background-color: darkblue;
      color: lightblue;
    }
    `
  ]
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
