import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardPageRoutingModule } from './guard-page-routing.module';
import { GuardPageComponent } from './guard-page.component';


@NgModule({
  declarations: [GuardPageComponent],
  imports: [
    CommonModule,
    GuardPageRoutingModule
  ]
})
export class GuardPageModule { }
