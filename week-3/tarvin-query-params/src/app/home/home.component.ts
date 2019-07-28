import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h2>This is my <u>Home Page</u>. There are many like it but this one is mine.</h2>
      </div>
    </div>
  `,
  styles: [
    `
    .container {
      margin-top: 20px;
      background-color: orange;
    }
    h2 {
      color: red;
    }
    u {
      color: darkred;
    }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
