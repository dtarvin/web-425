/*
; ============================================
; Title:  price-quote.component.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   16 Aug 2019
; Description: Exercise 6.3
;=============================================
*/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PriceQuote } from './iprice-quote';
import { interval } from 'rxjs';

@Component({
  selector: 'app-price-quote',
  template: `
    <strong>
      Inside PriceQuoteComponent
      {{ priceQuote?.stockSymbol }}
      {{ priceQuote?.lastPrice | currency: 'USD' }}
    </strong>
  `,
  styles: [`
    
  `]
})
export class PriceQuoteComponent implements OnInit {

  @Output() lastPrice = new EventEmitter<PriceQuote>();

  priceQuote: PriceQuote;

  constructor() { 
    interval(2000)
      .subscribe(data => {
        this.priceQuote = {
          stockSymbol: 'IBM',
          lastPrice: 100 * Math.random()
        };

        this.lastPrice.emit(this.priceQuote);
      });
  }

  ngOnInit() {
  }

}
