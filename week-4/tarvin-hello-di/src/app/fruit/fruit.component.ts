/*
; ============================================
; Title:  fruit.component.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   02 Aug 2019
; Description: Exercise 4.2 - Inversion of
;     Control and Dependency Injection
;=============================================
*/

import { FruitService } from './fruit.service';
import { Fruit } from './fruit';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit',
  template: `
  <div class="container">
  <div class="row">
    <h2>Fruit Details</h2>
    <table class="table table-hover table-striped">
      <thead class="tbl-header">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ fruit.id }}</td>
          <td>{{ fruit.name }}</td>
          <td>{{ fruit.color }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
  `,
  styles: [`
    .tbl-header {
      background-color: darkgreen;
      color: yellow
    }
    .table-striped {
      background-color: lightgreen;
    }
  `],
})
export class FruitComponent implements OnInit {
  fruit: Fruit;

  constructor(fruitService: FruitService) {
    this.fruit = fruitService.getFruit();
  }

  ngOnInit() {
  }

}
