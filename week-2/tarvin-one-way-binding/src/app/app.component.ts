/*
; ============================================
; Title:  app.component.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   16 Jul 2019
; Description: Exercise 2.2 - One-Way Binding
;=============================================  
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name }}</h1>
    <button (click)="changeName()">Change name</button>
  `,
  styles: [
    `
      h1 {
        color: red;
      }
    `
  ]
})
export class AppComponent {
  title = 'tarvin-one-way-binding';

  // class property
  name:string = "HM2 Tarvin";

  // change name function
  changeName() {
    this.name = "David Tarvin";
  }
}
