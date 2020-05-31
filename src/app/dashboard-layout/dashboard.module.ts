import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { SideNavComponent } from './common-components/side-nav/side-nav.component';
import { HeaderComponent } from './common-components/header/header.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { TopNavComponent } from './common-components/top-nav/top-nav.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { AddNewEmpComponent } from './pages/add-new-emp/add-new-emp.component';
import {BreadcrumbModule} from 'angular-crumbs';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PipesComponent } from './pages/pipes/pipes.component';
import { MypipePipe } from '../custompipes/mypipe.pipe';
import { DirectoneDirective } from '../customdirectives/directone.directive';
import { EmpListComponent } from './pages/emp-list/emp-list.component';

@NgModule({
  declarations: [
    SideNavComponent, HeaderComponent, 
    FooterComponent,DashboardLayoutComponent, 
    TopNavComponent, DashboardPageComponent, 
    AddNewEmpComponent, PipesComponent,MypipePipe,DirectoneDirective, EmpListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,BreadcrumbModule,FormsModule, ReactiveFormsModule
  ]
})
export class DashboardModule { }
 