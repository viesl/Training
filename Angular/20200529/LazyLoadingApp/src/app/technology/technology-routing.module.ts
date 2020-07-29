import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechnologyComponent } from './technology.component';

const routes: Routes = [
  { path: '', component: TechnologyComponent,
    children  : [
      { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
      { path: 'SELevels', loadChildren: () => import('./selevels/selevels.module').then(m => m.SELevelsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologyRoutingModule { }
