import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-info',
  template: `
    <p>
      Sold by Alfred Yankovic Enterprises
    </p>
  `,
  styles: [
    `
      p {
        font-family: Courier;
        background-color: black;
        color: silver;
      }
    `
  ]
})
export class SellerInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
