import { FruitService } from './fruit.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruit } from './fruit';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-sm navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item"><a routerLink="/home" class="nav-link">Home</a></li>
        <li class="nav-item"><a routerLink="/contact" class="nav-link">Contact</a></li>
        <li class="nav-item"><a routerLink="/about" class="nav-link">About</a></li>
      </ul>
    </nav>

    <div class="container">
      <div class="row">
        <h2>Fruit Order</h2>
        <table class="table table-hover table-striped">
          <thead class="tbl-header">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr  *ngFor="let fruit of fruits | async">
              <td>{{ fruit.id }}</td>
              <td>{{ fruit.name }}</td>
              <td>{{ fruit.pricePerPound }}</td>
              <td>{{ fruit.quantity }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .navbar {
      background-color: #CD5C5C;
    }
    .tbl-header {
      background-color: darkred;
      color: white;
    }
    .table-striped {
      background-color: #FFB6C1;
    }
    h2 {
      margin-top: 20px;
    }
  `],
  providers: [FruitService]
})
export class AppComponent {

  fruits: Observable<Fruit[]>;
  title = 'tarvin-async-pipe';

  constructor(private fruitService: FruitService) {}

  ngOnInit() {
    this.fruits = this.fruitService.getFruits();
  }
}
