/*
; ============================================
; Title:  app.module.ts
; Author: David Tarvin
; Date:   17 Jul 2019
; Description: Exercise 2.3 - Two-Way Binding
;=============================================  
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
