import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
  ],
  exports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
  ],
})
export class AngularMaterialModule {}
