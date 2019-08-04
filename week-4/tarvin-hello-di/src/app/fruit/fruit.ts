/*
; ============================================
; Title:  fruit.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   02 Aug 2019
; Description: Exercise 4.2 - Inversion of
;     Control and Dependency Injection
;=============================================
*/

export class Fruit {
  constructor(
    public id: number,
    public name: string,
    public color: string
  ) {}
}
