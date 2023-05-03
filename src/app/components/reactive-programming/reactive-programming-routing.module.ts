import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveProgrammingComponent } from './reactive-programming.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveProgrammingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveProgrammingRoutingModule { }
