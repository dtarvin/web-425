/*
; ============================================
; Title:  order.component.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   16 Aug 2019
; Description: Exercise 6.2
;=============================================
*/

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  @Input() quantity: number;
  @Input() stockSymbol: string;
}
