import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LlamadaApiRestComponent } from './llamada-api-rest.component';

const routes: Routes = [
  {
    path: '',
    component: LlamadaApiRestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LlamadaApiRestRoutingModule { }
