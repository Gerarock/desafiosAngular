import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { ListasComponent } from './components/listas/listas.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { ReactiveProgrammingComponent } from './components/reactive-programming/reactive-programming.component';
import { LlamadaApiRestComponent } from './components/llamada-api-rest/llamada-api-rest.component';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cards',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AuthComponent,
    loadChildren: () => import('./components/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'cards',
    component: CardsComponent,
    loadChildren: () => import('./components/cards/cards.module').then((m) => m.CardsModule)
  },
  {
    path: 'listas',
    component: ListasComponent,
    loadChildren: () => import('./components/listas/listas.module').then((m) => m.ListasModule)
  },
  {
    path: 'formularios',
    component: FormulariosComponent,
    loadChildren: () => import('./components/formularios/formularios.module').then((m) => m.FormulariosModule)
  },
  {
    path: 'reactive-programming',
    component: ReactiveProgrammingComponent,
    loadChildren: () => import('./components/reactive-programming/reactive-programming.module').then((m) => m.ReactiveProgrammingModule)
  },
  {
    path: 'llamada-api-rest',
    component: LlamadaApiRestComponent,
    loadChildren: () => import('./components/llamada-api-rest/llamada-api-rest.module').then((m) => m.LlamadaApiRestModule)
  },
  {
    path: '**',
    redirectTo: 'cards',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
