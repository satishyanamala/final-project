import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopinComponent } from './shopin/shopin.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';


const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ShopinComponent },
  { path: 'add', component: AddproductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
