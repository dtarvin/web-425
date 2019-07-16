/*
; ============================================
; Title:  app.module.ts
; Author: David Tarvin
; Date:   16 Jul 2019
; Description: Exercise 2.2 - One-Way Binding
;=============================================  
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
