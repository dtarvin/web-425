/*
; ============================================
; Title:  app.module.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   07 Sep 2019
; Description: Bob's Computer Repair Shop
;=============================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FixService } from './shared/fix.service';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { InvoiceSummaryDialogComponent } from './pages/invoice-summary-dialog/invoice-summary-dialog.component';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InvoiceSummaryDialogComponent,
    BaseLayoutComponent,
    HeaderComponent
  ],
  entryComponents: [InvoiceSummaryDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCheckboxModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [FixService],
  bootstrap: [AppComponent]
})
export class AppModule { }
