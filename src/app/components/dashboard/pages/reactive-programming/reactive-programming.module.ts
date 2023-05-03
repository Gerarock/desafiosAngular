import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveProgrammingRoutingModule } from './reactive-programming-routing.module';
import { ReactiveProgrammingComponent } from './reactive-programming.component';

@NgModule({
  declarations: [
    ReactiveProgrammingComponent
  ],
  imports: [
    CommonModule,
    ReactiveProgrammingRoutingModule
  ],
  exports: [
    ReactiveProgrammingComponent
  ]
})
export class ReactiveProgrammingModule { }
