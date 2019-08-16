/*
; ============================================
; Title:  app.component.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   16 Aug 2019
; Description: Exercise 6.2
;=============================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tarvin Input Properties Example';

  stock: string;
  readonly numberOfShares = 100;

  onChangeEvent({ target }): void {
    this.stock = target.value;
  }
}
