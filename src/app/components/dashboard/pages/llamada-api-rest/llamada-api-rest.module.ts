import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LlamadaApiRestRoutingModule } from './llamada-api-rest-routing.module';
import { LlamadaApiRestComponent } from './llamada-api-rest.component';

@NgModule({
  declarations: [
    LlamadaApiRestComponent
  ],
  imports: [
    CommonModule,
    LlamadaApiRestRoutingModule
  ],
  exports: [
    LlamadaApiRestComponent
  ]
})
export class LlamadaApiRestModule { }
