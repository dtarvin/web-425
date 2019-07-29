/*
; ============================================
; Title:  product-description.component.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   27 Jul 2019
; Description: Exercise 3.3 - Child Routes
;=============================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description',
  template: `
    <p>
      Be the first on your block to order the world's first 2000" UHD TV. Endorsed by Frank himself, having this TV is like having a drive in movie
      in your own living room. You'll be able to watch the Simpsons from 30 blocks away. Won't your neighbors be green! Last one in stock.
    </p>
  `,
  styles: [
    `
      p {
        font-family: cursive;
        color: gold;
        background-color: black;
        width: 60%;
        margin: auto;
      }
    `
  ]
})
export class ProductDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
