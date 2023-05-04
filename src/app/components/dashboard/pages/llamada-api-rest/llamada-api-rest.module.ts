import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LlamadaApiRestRoutingModule } from './llamada-api-rest-routing.module';
import { LlamadaApiRestComponent } from './llamada-api-rest.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    LlamadaApiRestComponent
  ],
  imports: [
    CommonModule,
    LlamadaApiRestRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    LlamadaApiRestComponent
  ]
})
export class LlamadaApiRestModule { }
