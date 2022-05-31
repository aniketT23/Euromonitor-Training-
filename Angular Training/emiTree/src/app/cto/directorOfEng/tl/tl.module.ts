import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TlRoutingModule } from './tl-routing.module';
import { SeniorSEComponent } from './senior-se/senior-se.component';
import { Se3Component } from './se3/se3.component';
import { Se2Component } from './se2/se2.component';
import { Se1Component } from './se1/se1.component';


@NgModule({
  declarations: [
    SeniorSEComponent,
    Se3Component,
    Se2Component,
    Se1Component
  ],
  imports: [
    CommonModule,
    TlRoutingModule
  ]
})
export class TlModule { }
