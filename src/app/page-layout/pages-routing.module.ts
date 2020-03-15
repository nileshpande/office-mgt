import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLayoutComponent } from './page-layout/page-layout.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginRegComponent } from './pages/login-reg/login-reg.component';
import { PricingComponent } from './pages/pricing/pricing.component';

const routes: Routes = [
  {
    path:'',
    component:PageLayoutComponent,
    children:[
      {
        path:'',
        component:  HomeComponent 
      },
      {
        path:'login-reg',
        component:  LoginRegComponent 
      },
      {
        path:'pricing',
        component:  PricingComponent 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
