import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllMaterialModule} from '../material-import';

import { PagesRoutingModule } from './pages-routing.module';
import { PageLayoutComponent } from "./page-layout/page-layout.component";
import { HeaderComponent } from './common-components/header/header.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginRegComponent } from './pages/login-reg/login-reg.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [PageLayoutComponent, HeaderComponent, FooterComponent, HomeComponent, LoginRegComponent, PricingComponent,],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AllMaterialModule,FormsModule, ReactiveFormsModule
  ]
})
export class PagesModule { }
