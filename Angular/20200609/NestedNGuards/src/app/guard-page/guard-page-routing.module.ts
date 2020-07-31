import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardPageComponent } from './guard-page.component';

const routes: Routes = [{ path: '', component: GuardPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardPageRoutingModule { }
