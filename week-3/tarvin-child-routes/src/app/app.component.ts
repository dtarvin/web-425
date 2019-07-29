/*
; ============================================
; Title:  app.component.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   27 Jul 2019
; Description: Exercise 3.3 - Child Routes
;=============================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarvin-child-routes';
  productId = 3000;
}
