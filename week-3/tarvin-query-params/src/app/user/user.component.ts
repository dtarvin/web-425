import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
    <div class="container">
      <div class="row">
        <h2>You must be looking for User #{{ userId }}</h2>
        <p>She must be a pretty special person...</p>
      </div>
    </div>
  `,
  styles: [
    `
    .container {
      margin-top: 20px;
      font-family: Verdant;
    }

    h2 {
      color: darkgreen;
      background-color: lightgreen;
    }
    p {
      color: lightgreen;
      background-color: darkgreen;
    }
    `
  ]
})
export class UserComponent implements OnInit {
  userId: string;

  constructor(route: ActivatedRoute) {
    this.userId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
