/*
; ============================================
; Title:  app-routing.module.ts
; Author: Richard Krasso
; Modified By: David Tarvin
; Date:   27 Jul 2019
; Description: Exercise 3.3 - Child Routes
;=============================================
*/

import { SellerInfoComponent } from './seller-info/seller-info.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponent,
      children: [
        { path: '', component: ProductDescriptionComponent },
        { path: 'seller/:id', component: SellerInfoComponent }
      ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
