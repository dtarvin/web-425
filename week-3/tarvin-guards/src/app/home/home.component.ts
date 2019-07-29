import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <h1 class="home">Harry's Hog Farm</h1>
      <h3>Home of the finest pigs in the US of A!!!</h3>
      <p>Please <a href="./login">login</a> to see all our beautiful pigs.<p>
    </div>
  `,
  styles: [
    `
      .container {
        background-color: maroon;
        color: pink;
        text-align: center;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
