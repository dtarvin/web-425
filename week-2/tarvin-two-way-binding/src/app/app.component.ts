/*
; ============================================
; Title:  app.component.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   17 Jul 2019
; Description: Exercise 2.3 - One-Way Binding
;=============================================  
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-sm bg-light navbar-light">
      <ul class="navbar-nav">
        <a class="navbar-brand" href="#">Tarvin Angular</a>
        <li class="nav-item active">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
    
    <div class="container-fluid two-way-form">
      <h2><u>The Amazing Name Populator!!!</u></h2><br>
      <div class="form-group">
        <input class="form-control" type="text"
                      placeholder="Put your name in here..."
                      [(ngModel)]="name">
    
        <button class="btn btn-primary form-control" (click)="name=''">Clear Name</button>
      </div>

      <div class="form-group">
        <p class="alert-success">You did it, {{name}}! </p>
      </div>

    </div>
  `,
  styles: [
    `
    .two-way-form {
      width: 30%;
      text-align: center;
      border: 1px dashed red;
    }

    h2 {
      color: blue;
    }
    `
  ]
})
export class AppComponent {
  title = 'tarvin-two-way-binding';
}
