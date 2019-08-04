/*
; ============================================
; Title:  fruit.service.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   02 Aug 2019
; Description: Exercise 4.2 - Inversion of
;     Control and Dependency Injection
;=============================================
*/

import { Fruit } from './fruit';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  getFruit(): Fruit {
    return new Fruit(0, "Apple", "red");
  }

  constructor() { }
}
