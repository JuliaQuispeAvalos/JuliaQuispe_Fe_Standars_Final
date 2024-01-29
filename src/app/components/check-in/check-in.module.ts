import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckInRoutingModule } from './check-in-routing.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CheckInComponent } from './components/check-in/check-in.component';


@NgModule({
  declarations: [
    CheckInComponent
  ],
  imports: [
    CommonModule,
    CheckInRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class CheckInModule { }
