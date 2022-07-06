import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule,MatIconModule ],
  exports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule,MatIconModule ],
})
export class AngularMaterialModule {}
