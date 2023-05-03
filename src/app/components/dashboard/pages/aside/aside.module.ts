import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsideRoutingModule } from './aside-routing.module';
import { AsideComponent } from './aside.component';


@NgModule({
  declarations: [
    AsideComponent
  ],
  imports: [
    CommonModule,
    AsideRoutingModule
  ],
  exports: [
    AsideComponent
  ]
})
export class AsideModule { }
