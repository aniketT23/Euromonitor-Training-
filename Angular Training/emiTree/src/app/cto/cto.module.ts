import { CheifArchitectComponent } from './cheif-architect/cheif-architect.component';
import { CommonModule } from '@angular/common';
import { CtoRoutingModule } from './cto-routing.module';
import { NgModule } from '@angular/core';
import { HrComponent } from './directorOfEng/hr/hr.component';
import { TrainerComponent } from './directorOfEng/trainer/trainer.component';

@NgModule({
  declarations: [

    CheifArchitectComponent,
     HrComponent,
     TrainerComponent,

  ],
  imports: [
    CommonModule,
    CtoRoutingModule
  ]
})
export class CtoModule { }
