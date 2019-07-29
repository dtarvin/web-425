import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-detail',
  template: `
    <h1 class="product">Product Detail Component</h1>
    <input placeholder="Enter your name" type="text" [formControl]="name">
  `,
  styles: [
    `
      .product {
        background-color: cyan;
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
