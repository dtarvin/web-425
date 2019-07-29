import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-detail',
  template: `
  <div class="container">
    <h1>Welcome to the Pig Purchase Palace!</h1>
    <p>Any type of pig you need you can get right here!</p>
    <p>For faster service, please enter your name below:</p>
    <input placeholder="Enter your name" type="text" [formControl]="name">
  </div>
  `,
  styles: [
    `
      .container {
        background-color: pink;
        color: white;
        text-align: center;
        height: 100vh;
        width: 100vw;
      }
      h1 {
        font-family: cursive;
      }
    `
  ]
})
export class ProductDetailComponent implements OnInit {

  name: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
