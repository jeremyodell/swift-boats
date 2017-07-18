import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdListModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdSelectModule,
  MdTabsModule,
  MdToolbarModule,
  MdSnackBarModule,
  MdCardModule,
} from '@angular/material';
const modules = [
  CommonModule,
  FormsModule,
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdListModule,
  MdSelectModule,
  MdProgressSpinnerModule,
  MdProgressBarModule,
  MdSelectModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdCardModule
];

@NgModule({
  imports: [ modules ],
  exports: [ modules ],
  declarations: [],
})
export class SharedModule { }
