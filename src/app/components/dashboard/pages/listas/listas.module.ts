import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasRoutingModule } from './listas-routing.module';
import { ListasComponent } from './listas.component';

@NgModule({
  declarations: [
    ListasComponent
  ],
  imports: [
    CommonModule,
    ListasRoutingModule
  ],
  exports: [
    ListasComponent
  ]
})
export class ListasModule { }
