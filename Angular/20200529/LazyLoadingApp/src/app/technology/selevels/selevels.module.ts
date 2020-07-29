import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SELevelsRoutingModule } from './selevels-routing.module';
import { SELevelsComponent } from './selevels.component';


@NgModule({
  declarations: [SELevelsComponent],
  imports: [
    CommonModule,
    SELevelsRoutingModule
  ]
})
export class SELevelsModule { }
