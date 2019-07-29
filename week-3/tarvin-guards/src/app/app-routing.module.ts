import { UnsavedChangesGuard } from './unsaved-changes.guard';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product',
          component: ProductDetailComponent,
          canActivate: [LoginGuard],
          canDeactivate: [UnsavedChangesGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
