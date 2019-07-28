import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  template: `
    <div class="product">
      <h1>Information for Product #{{ productId }}</h1>
      <router-outlet></router-outlet>
      <p><a [routerLink]="['./seller', sellerId]">Seller Information</a></p>
    </div>

  `,
  styles: [
    `
    .product {
      background-color: lavender;
      text-align: center;
    }
    `
  ]
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  sellerId = 2814;

  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
