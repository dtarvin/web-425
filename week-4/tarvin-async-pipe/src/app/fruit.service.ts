/*
; ============================================
; Title:  fruit.service.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   02 Aug 2019
; Description: Assignment 4.4
;=============================================
*/

import { Fruit } from './fruit';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class FruitService {

    fruits: Fruit[] = [
      {id: 1, name: "Bananas", pricePerPound: "0.19", quantity: 2},
      {id: 2, name: "Apples", pricePerPound: "2.18", quantity: 5},
      {id: 3, name: "Cherries", pricePerPound: "0.36", quantity: 25},
      {id: 4, name: "Kiwi", pricePerPound: "0.85", quantity: 4},
      {id: 5, name: "Oranges", pricePerPound: "1.92", quantity: 6}
    ]
  constructor() { }

  getFruits(): Observable<Fruit[]> {
    return of(this.fruits);
  }
}
