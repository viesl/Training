import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SELevelsComponent } from './selevels.component';

const routes: Routes = [{ path: '', component: SELevelsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SELevelsRoutingModule { }
