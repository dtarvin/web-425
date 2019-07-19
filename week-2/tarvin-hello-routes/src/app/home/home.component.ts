/*
; ============================================
; Title:  home.component.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   17 Jul 2019
; Description: Assignment 2.4 - Routing in Action
;=============================================  
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h3>
          You have reached the not-very-important home page. Sorry...
        </h3>
      </div>
    </div>
  `,
  styles: [
    `
      body {
        margin-top: 20px;
      }

      h3 {
        text-align: center;
        color: blue;
        animation: zoominouthome 10s forwards;
      }

      @keyframes zoominouthome {
        0% {
          transform: scale(1,1);
        }
        50% {
          transform: scale(.75,.75);
        }
        100%{
          transform: scale(1,1);
        }
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
