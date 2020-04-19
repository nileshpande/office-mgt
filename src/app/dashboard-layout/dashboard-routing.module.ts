import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { AddNewEmpComponent } from './pages/add-new-emp/add-new-emp.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path:'', component: DashboardLayoutComponent,
    data: {
      breadcrumb: 'Dashboard'
    },
    children: [
      { 
        path:'',  component:DashboardPageComponent,
        data: {
          breadcrumb: 'Dashboard'
        }
      },
      { 
        path:'add-new-employee', component: AddNewEmpComponent,
        data: {
          breadcrumb: 'Add New Employee'
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
