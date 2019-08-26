/*
; ============================================
; Title:  app.component.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   16 Aug 2019
; Description: Assignment 6.4
;=============================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarvin-onchange-events';

  myGreeting = 'hello';
  myUser: { name: string } = { name: 'John' }
}
