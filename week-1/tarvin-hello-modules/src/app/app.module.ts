import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*
; ============================================
; Title:  app.module.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   08 Jul 2019
; Description: Exercise 1.5 - Modules
;===========================================  
*/

import { AppComponent } from './app.component';
import { ShippingModule } from './shipping/shipping.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShippingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
