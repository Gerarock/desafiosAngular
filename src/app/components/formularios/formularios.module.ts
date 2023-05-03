import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulariosRoutingModule } from './formularios-routing.module';
import { FormulariosComponent } from './formularios.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormulariosComponent
  ],
  imports: [
    CommonModule,
    FormulariosRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    FormulariosComponent
  ]
})
export class FormulariosModule { }
