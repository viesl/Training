import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'technology', loadChildren: () => import('./technology/technology.module').then(m => m.TechnologyModule) },
  { path: 'Sales', loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule) },
  { path: 'HR', loadChildren: () => import('./hr/hr.module').then(m => m.HRModule) },
  { path: '', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
