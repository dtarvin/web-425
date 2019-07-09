/*
; ============================================
; Title:  shipping.component.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   08 Jul 2019
; Description: Exercise 1.5 - Modules
;===========================================  
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  template: `
    <p>
      This is the ShippingComponent. This is only the ShippingComponent. If this had been another Component it would have been much more interesting.
    </p>
  `,
  styles: []
})
export class ShippingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
