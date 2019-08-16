/*
; ============================================
; Title:  app.component.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   16 Aug 2019
; Description: Exercise 6.3
;=============================================
*/

import { Component } from '@angular/core';
import { PriceQuote } from './price-quote/iprice-quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarvin-output-properties';

  priceQuote: PriceQuote;

  priceQuoteHandler(event: PriceQuote) {
    this.priceQuote = event;
  }
}
