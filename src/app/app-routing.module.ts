import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

//'../dashboard-layout/dashboard/'
const routes: Routes = [
  {
    path:'',
    loadChildren:()=>  import(`./page-layout/pages.module`).then(p => p.PagesModule) 
  },
  {
    path:'dash',
    canActivate:[AuthGuard],
    loadChildren:()=>  import(`./dashboard-layout/dashboard.module`).then(d => d.DashboardModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
