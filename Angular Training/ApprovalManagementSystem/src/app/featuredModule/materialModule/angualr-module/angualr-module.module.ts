import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, 
    MatGridListModule],
  exports: [MatGridListModule,
     CommonModule],
})
export class AngualrModuleModule {}
