/*
; ============================================
; Title:  seller-info.component.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   27 Jul 2019
; Description: Exercise 3.3 - Child Routes
;=============================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-info',
  template: `
    <p>
      Sold by Alfred Yankovic Enterprises
    </p>
  `,
  styles: [
    `
      p {
        font-family: Courier;
        background-color: black;
        color: silver;
      }
    `
  ]
})
export class SellerInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
