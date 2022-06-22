import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatTableModule} from '@angular/material/table';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  exports:[
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ]
})
export class AngularMaterialModule { }
