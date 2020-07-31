import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleGuardGuard } from './core/guards/example-guard.guard';
import { StoreRecordsComponent } from './store-records/store-records.component';
import { EmployeeResolver } from './core/resolvers/employee.resolver';
import { EmployeeResolveComponent } from './employee-resolve/employee-resolve.component';


const routes: Routes = [
  { 
    path: 'guardpage', 
    loadChildren: () => import('./guard-page/guard-page.module').then(m => m.GuardPageModule), 
    canLoad: [ExampleGuardGuard]
  },
  { 
    path: 'store', 
    component: StoreRecordsComponent
  },
  { 
    path: 'resolve', 
    component: EmployeeResolveComponent,
    resolve: { empData: EmployeeResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
